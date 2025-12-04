import { auth, db } from '../firebaseConfig';
import { signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc, arrayUnion, onSnapshot } from 'firebase/firestore';
import { User, CourseModule } from '../types';
import { MOCK_USER } from '../constants';

// Auth Services
export const loginWithEmail = async (email: string, pass: string, rememberMe: boolean = false) => {
    try {
        const { setPersistence, browserLocalPersistence, browserSessionPersistence } = await import('firebase/auth');
        await setPersistence(auth, rememberMe ? browserLocalPersistence : browserSessionPersistence);

        const userCredential = await signInWithEmailAndPassword(auth, email, pass);
        return userCredential.user;
    } catch (error) {
        console.error("Login failed", error);
        throw error;
    }
};

export const loginWithGoogle = async () => {
    try {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        // Check domain
        if (!user.email?.endsWith('@digitalmojo.in')) {
            await signOut(auth);
            throw new Error("Only @digitalmojo.in emails are allowed.");
        }

        // Check if user exists in Firestore
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);

        if (!userSnap.exists()) {
            // Create new user profile if it doesn't exist
            const userData: User = {
                id: user.uid,
                name: user.displayName || "User",
                email: user.email || "",
                avatar: user.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.displayName || "User")}&background=random`,
                role: 'user',
                department: '', // To be filled later
                joinDate: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
            };
            await setDoc(userRef, userData);
        }

        return user;
    } catch (error) {
        console.error("Google login failed", error);
        throw error;
    }
};

export const resetPassword = async (email: string) => {
    try {
        const { sendPasswordResetEmail } = await import('firebase/auth');
        await sendPasswordResetEmail(auth, email);
    } catch (error) {
        console.error("Password reset failed", error);
        throw error;
    }
};

export const registerUser = async (email: string, pass: string, name: string, role: string, department: string = "") => {
    try {
        if (!email.endsWith('@digitalmojo.in')) {
            throw new Error("Only @digitalmojo.in emails are allowed.");
        }

        // 1. Create Auth User
        const { createUserWithEmailAndPassword } = await import('firebase/auth');
        const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
        const user = userCredential.user;

        // 2. Create User Profile in Firestore
        const userRef = doc(db, "users", user.uid);
        const userData: User = {
            id: user.uid,
            name,
            email,
            avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`,
            role,
            department,
            joinDate: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
        };

        await setDoc(userRef, userData);

        // Sign out immediately so the user has to log in manually
        try {
            await signOut(auth);
        } catch (logoutError) {
            console.warn("Auto-logout after registration failed", logoutError);
            // We don't throw here because the registration itself was successful
        }

        return user;
    } catch (error) {
        console.error("Registration failed", error);
        throw error;
    }
};

export const logoutUser = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error("Logout failed", error);
        throw error;
    }
};

// Database Services

// Fetch user profile from Firestore, or fallback to Mock if new user
// Fetch user profile from Firestore, or fallback to Mock ONLY if it's the mock user
export const getUserData = async (uid: string, email?: string | null): Promise<User | null> => {
    try {
        const userRef = doc(db, "users", uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
            const data = userSnap.data();
            // Validate required fields to prevent UI crashes
            if (data && typeof data.name === 'string' && typeof data.department === 'string') {
                return data as User;
            } else {
                console.warn("User data found but incomplete:", data);
                return null; // Triggers App.tsx fallback
            }
        } else {
            // Only return mock data if the email matches the mock user
            if (email === MOCK_USER.email) {
                return { ...MOCK_USER, id: uid };
            }
            // Otherwise return null (user needs to register or data is missing)
            return null;
        }
    } catch (error) {
        console.error("Error fetching user data", error);
        return null;
    }
};

export const subscribeToUserData = (uid: string, onUpdate: (user: User | null) => void) => {
    const userRef = doc(db, "users", uid);
    return onSnapshot(userRef, (doc) => {
        if (doc.exists()) {
            const data = doc.data();
            if (data) {
                onUpdate(data as User);
            } else {
                onUpdate(null);
            }
        } else {
            onUpdate(null);
        }
    }, (error) => {
        console.error("Error subscribing to user data", error);
        onUpdate(null);
    });
};

// Update progress for a specific module
export const updateModuleProgress = async (userId: string, courseId: string, moduleId: string) => {
    try {
        const userRef = doc(db, "users", userId);

        // Using setDoc with merge: true to create if not exists or update
        await setDoc(userRef, {
            progress: {
                [courseId]: {
                    completedModules: arrayUnion(moduleId),
                    lastUpdated: new Date().toISOString(),
                    lastAccessedModuleId: moduleId
                }
            }
        }, { merge: true });

        console.log(`Progress updated for user ${userId}, course ${courseId}, module ${moduleId}`);
    } catch (error) {
        console.error("Error updating progress", error);
        throw error;
    }
};

export const saveQuizResult = async (userId: string, courseId: string, quizId: string, score: number, passed: boolean) => {
    try {
        const { runTransaction } = await import('firebase/firestore');
        const userRef = doc(db, "users", userId);

        await runTransaction(db, async (transaction) => {
            const userDoc = await transaction.get(userRef);
            if (!userDoc.exists()) {
                throw "User does not exist!";
            }

            const userData = userDoc.data() as User;
            const currentProgress = userData.progress?.[courseId];
            const currentQuizScore = currentProgress?.quizScores?.[quizId];

            const currentAttempts = currentQuizScore?.attempts || 0;
            const newAttempts = currentAttempts + 1;

            // Only update score if it's higher or if it's the first attempt
            // OR if we want to track the *latest* score regardless. 
            // Let's keep the highest score for passing purposes, but update attempts.
            // Actually, for a quiz, usually the latest attempt counts, or best. 
            // Let's store the BEST score, but update attempts.
            const bestScore = Math.max(currentQuizScore?.score || 0, score);
            const isPassed = passed || currentQuizScore?.passed || false;

            const updateData = {
                [`progress.${courseId}.quizScores.${quizId}`]: {
                    score: bestScore,
                    passed: isPassed,
                    attempts: newAttempts,
                    completedAt: new Date().toISOString()
                },
                [`progress.${courseId}.lastUpdated`]: new Date().toISOString()
            };

            transaction.update(userRef, updateData);
        });

        console.log(`Quiz result saved for user ${userId}, quiz ${quizId}, score ${score}`);
    } catch (error) {
        console.error("Error saving quiz result", error);
        throw error;
    }
};

export const updateUserProfile = async (userId: string, data: Partial<User>) => {
    try {
        const userRef = doc(db, "users", userId);
        await setDoc(userRef, data, { merge: true });
        console.log(`User profile updated for ${userId}`);
    } catch (error) {
        console.error("Error updating user profile", error);
        throw error;
    }
};

// Content Services
import { collection, getDocs, query, where } from 'firebase/firestore';
import { Course, Quiz } from '../types';

export const getCourses = async (): Promise<Course[]> => {
    try {
        const coursesRef = collection(db, 'courses');
        const snapshot = await getDocs(coursesRef);
        return snapshot.docs.map(doc => doc.data() as Course);
    } catch (error) {
        console.error("Error fetching courses", error);
        return [];
    }
};

export const getCourse = async (courseId: string): Promise<Course | null> => {
    try {
        const docRef = doc(db, 'courses', courseId);
        const snapshot = await getDoc(docRef);
        if (snapshot.exists()) {
            return snapshot.data() as Course;
        }
        return null;
    } catch (error) {
        console.error("Error fetching course", error);
        return null;
    }
};

export const getQuiz = async (quizId: string): Promise<Quiz | null> => {
    try {
        const docRef = doc(db, 'quizzes', quizId);
        const snapshot = await getDoc(docRef);
        if (snapshot.exists()) {
            return snapshot.data() as Quiz;
        }
        return null;
    } catch (error) {
        console.error("Error fetching quiz", error);
        return null;
    }
};

export const getQuizByModuleId = async (moduleId: string): Promise<Quiz | null> => {
    try {
        const quizzesRef = collection(db, 'quizzes');
        const q = query(quizzesRef, where("moduleId", "==", moduleId));
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
            return snapshot.docs[0].data() as Quiz;
        }
        return null;
    } catch (error) {
        console.error("Error fetching quiz by module", error);
        return null;
    }
};
