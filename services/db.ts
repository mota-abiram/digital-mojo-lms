import { auth, db } from '../firebaseConfig';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc, arrayUnion } from 'firebase/firestore';
import { User, CourseModule } from '../types';
import { MOCK_USER } from '../constants';

// Auth Services
export const loginWithEmail = async (email: string, pass: string) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, pass);
        return userCredential.user;
    } catch (error) {
        console.error("Login failed", error);
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
export const getUserData = async (uid: string): Promise<User | null> => {
    try {
        const userRef = doc(db, "users", uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
            return userSnap.data() as User;
        } else {
            // For demo purposes, if user doesn't exist in DB, return a default profile based on Mock
            // In a real app, you might create the user document on sign-up
            return { ...MOCK_USER, id: uid };
        }
    } catch (error) {
        console.error("Error fetching user data", error);
        return null;
    }
};

// Update progress for a specific module
export const updateModuleProgress = async (userId: string, courseId: string, moduleId: string) => {
    try {
        // We store progress in a subcollection or a map field. 
        // For simplicity, let's assume a 'progress' map in the user document:
        // users/{userId} -> { progress: { [courseId]: { completedModules: [moduleId, ...] } } }

        const userRef = doc(db, "users", userId);

        // Using setDoc with merge: true to create if not exists or update
        await setDoc(userRef, {
            progress: {
                [courseId]: {
                    completedModules: arrayUnion(moduleId),
                    lastUpdated: new Date().toISOString()
                }
            }
        }, { merge: true });

        console.log(`Progress updated for user ${userId}, course ${courseId}, module ${moduleId}`);
    } catch (error) {
        console.error("Error updating progress", error);
        throw error;
    }
};
