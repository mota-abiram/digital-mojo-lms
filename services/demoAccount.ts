import { auth, db } from '../firebaseConfig';
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, setDoc, getDocs, collection } from 'firebase/firestore';
import { User, Course, Quiz } from '../types';

// Demo account credentials
export const DEMO_ACCOUNT = {
  email: 'demo@digitalmojo.in',
  password: 'DemoAccount123!',
  name: 'Alex Johnson',
  role: 'Account Manager',
  department: 'Sales',
  avatar: 'https://ui-avatars.com/api/?name=Alex+Johnson&background=6366f1&color=fff&size=200'
};

/**
 * Creates a demo account with realistic progress data for showcasing the LMS
 */
export const createDemoAccount = async () => {
  try {
    // Check if demo account already exists
    try {
      // Try to create the auth user
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        DEMO_ACCOUNT.email,
        DEMO_ACCOUNT.password
      );
      const user = userCredential.user;

      // Fetch all courses and quizzes from Firestore
      const coursesSnapshot = await getDocs(collection(db, 'courses'));
      const quizzesSnapshot = await getDocs(collection(db, 'quizzes'));

      const courses = coursesSnapshot.docs.map(doc => doc.data() as Course);
      const quizzes = quizzesSnapshot.docs.map(doc => doc.data() as Quiz);

      // Create realistic progress data
      const progress: User['progress'] = {};

      // Complete the first mandated course (100%)
      const mandatedCourse = courses.find(c => c.category === 'mandated');
      if (mandatedCourse) {
        const allModuleIds = mandatedCourse.sections?.flatMap(s => s.modules || []).map(m => m.id) || [];
        const courseQuizzes = quizzes.filter(q => 
          allModuleIds.some(moduleId => q.moduleId === moduleId)
        );

        const quizScores: any = {};
        courseQuizzes.forEach(quiz => {
          quizScores[quiz.id] = {
            score: 95,
            attempts: 1,
            passed: true,
            completedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days ago
            history: [{
              score: 95,
              passed: true,
              completedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
            }]
          };
        });

        progress[mandatedCourse.id] = {
          completedModules: allModuleIds,
          lastUpdated: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
          lastAccessedModuleId: allModuleIds[allModuleIds.length - 1],
          quizScores: Object.keys(quizScores).length > 0 ? quizScores : undefined,
          certificate: {
            id: `cert_${mandatedCourse.id}_${user.uid}`,
            issuedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString() // 5 days ago
          }
        };
      }

      // Complete one role-specific course (100%)
      const roleSpecificCourse = courses.find(c => c.category === 'role-specific');
      if (roleSpecificCourse) {
        const allModuleIds = roleSpecificCourse.sections?.flatMap(s => s.modules || []).map(m => m.id) || [];
        const courseQuizzes = quizzes.filter(q => 
          allModuleIds.some(moduleId => q.moduleId === moduleId)
        );

        const quizScores: any = {};
        courseQuizzes.forEach((quiz, index) => {
          // Vary scores between 85-100 for realism
          const score = 85 + Math.floor(Math.random() * 15);
          quizScores[quiz.id] = {
            score: score,
            attempts: index < 2 ? 1 : 2, // Some quizzes took 2 attempts
            passed: true,
            completedAt: new Date(Date.now() - (14 - index) * 24 * 60 * 60 * 1000).toISOString(),
            history: index < 2 ? [{
              score: score,
              passed: true,
              completedAt: new Date(Date.now() - (14 - index) * 24 * 60 * 60 * 1000).toISOString()
            }] : [{
              score: Math.max(70, score - 10),
              passed: false,
              completedAt: new Date(Date.now() - (15 - index) * 24 * 60 * 60 * 1000).toISOString()
            }, {
              score: score,
              passed: true,
              completedAt: new Date(Date.now() - (14 - index) * 24 * 60 * 60 * 1000).toISOString()
            }]
          };
        });

        progress[roleSpecificCourse.id] = {
          completedModules: allModuleIds,
          lastUpdated: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
          lastAccessedModuleId: allModuleIds[allModuleIds.length - 1],
          quizScores: Object.keys(quizScores).length > 0 ? quizScores : undefined,
          certificate: {
            id: `cert_${roleSpecificCourse.id}_${user.uid}`,
            issuedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString() // 2 days ago
          }
        };
      }

      // Partially complete another course (60-80%)
      const optionalCourse = courses.find(c => c.category === 'optional');
      if (optionalCourse) {
        const allModuleIds = optionalCourse.sections?.flatMap(s => s.modules || []).map(m => m.id) || [];
        const completedCount = Math.floor(allModuleIds.length * 0.7); // 70% complete
        const completedModules = allModuleIds.slice(0, completedCount);
        const courseQuizzes = quizzes.filter(q => 
          completedModules.some(moduleId => q.moduleId === moduleId)
        );

        const quizScores: any = {};
        courseQuizzes.forEach((quiz, index) => {
          const score = 80 + Math.floor(Math.random() * 15);
          quizScores[quiz.id] = {
            score: score,
            attempts: 1,
            passed: true,
            completedAt: new Date(Date.now() - (5 - index) * 24 * 60 * 60 * 1000).toISOString(),
            history: [{
              score: score,
              passed: true,
              completedAt: new Date(Date.now() - (5 - index) * 24 * 60 * 60 * 1000).toISOString()
            }]
          };
        });

        progress[optionalCourse.id] = {
          completedModules: completedModules,
          lastUpdated: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
          lastAccessedModuleId: completedModules[completedModules.length - 1],
          quizScores: Object.keys(quizScores).length > 0 ? quizScores : undefined
        };
      }

      // Create user document in Firestore
      const userData: User = {
        id: user.uid,
        name: DEMO_ACCOUNT.name,
        email: DEMO_ACCOUNT.email,
        avatar: DEMO_ACCOUNT.avatar,
        role: DEMO_ACCOUNT.role,
        department: DEMO_ACCOUNT.department,
        joinDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { 
          month: 'short', 
          day: 'numeric', 
          year: 'numeric' 
        }), // 30 days ago
        progress: progress
      };

      const userRef = doc(db, 'users', user.uid);
      await setDoc(userRef, userData);

      // Sign out immediately so the user has to log in manually
      await signOut(auth);

      return {
        success: true,
        email: DEMO_ACCOUNT.email,
        password: DEMO_ACCOUNT.password,
        message: 'Demo account created successfully!'
      };
    } catch (error: any) {
      // If user already exists, update their data instead
      if (error.code === 'auth/email-already-in-use') {
        // We can't update auth user password, but we can update Firestore data
        // For now, return info that account exists
        return {
          success: false,
          email: DEMO_ACCOUNT.email,
          password: DEMO_ACCOUNT.password,
          message: 'Demo account already exists. You can log in with the credentials above.',
          exists: true
        };
      }
      throw error;
    }
  } catch (error: any) {
    console.error('Error creating demo account:', error);
    throw error;
  }
};

/**
 * Updates existing demo account with fresh progress data
 */
export const updateDemoAccountData = async (userId: string) => {
  try {
    // Fetch all courses and quizzes from Firestore
    const coursesSnapshot = await getDocs(collection(db, 'courses'));
    const quizzesSnapshot = await getDocs(collection(db, 'quizzes'));

    const courses = coursesSnapshot.docs.map(doc => doc.data() as Course);
    const quizzes = quizzesSnapshot.docs.map(doc => doc.data() as Quiz);

    // Create realistic progress data (same logic as createDemoAccount)
    const progress: User['progress'] = {};

    // Complete the first mandated course (100%)
    const mandatedCourse = courses.find(c => c.category === 'mandated');
    if (mandatedCourse) {
      const allModuleIds = mandatedCourse.sections?.flatMap(s => s.modules || []).map(m => m.id) || [];
      const courseQuizzes = quizzes.filter(q => 
        allModuleIds.some(moduleId => q.moduleId === moduleId)
      );

      const quizScores: any = {};
      courseQuizzes.forEach(quiz => {
        quizScores[quiz.id] = {
          score: 95,
          attempts: 1,
          passed: true,
          completedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
          history: [{
            score: 95,
            passed: true,
            completedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
          }]
        };
      });

      progress[mandatedCourse.id] = {
        completedModules: allModuleIds,
        lastUpdated: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
        lastAccessedModuleId: allModuleIds[allModuleIds.length - 1],
        quizScores: Object.keys(quizScores).length > 0 ? quizScores : undefined,
        certificate: {
          id: `cert_${mandatedCourse.id}_${userId}`,
          issuedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString()
        }
      };
    }

    // Complete one role-specific course (100%)
    const roleSpecificCourse = courses.find(c => c.category === 'role-specific');
    if (roleSpecificCourse) {
      const allModuleIds = roleSpecificCourse.sections?.flatMap(s => s.modules || []).map(m => m.id) || [];
      const courseQuizzes = quizzes.filter(q => 
        allModuleIds.some(moduleId => q.moduleId === moduleId)
      );

      const quizScores: any = {};
      courseQuizzes.forEach((quiz, index) => {
        const score = 85 + Math.floor(Math.random() * 15);
        quizScores[quiz.id] = {
          score: score,
          attempts: index < 2 ? 1 : 2,
          passed: true,
          completedAt: new Date(Date.now() - (14 - index) * 24 * 60 * 60 * 1000).toISOString(),
          history: index < 2 ? [{
            score: score,
            passed: true,
            completedAt: new Date(Date.now() - (14 - index) * 24 * 60 * 60 * 1000).toISOString()
          }] : [{
            score: Math.max(70, score - 10),
            passed: false,
            completedAt: new Date(Date.now() - (15 - index) * 24 * 60 * 60 * 1000).toISOString()
          }, {
            score: score,
            passed: true,
            completedAt: new Date(Date.now() - (14 - index) * 24 * 60 * 60 * 1000).toISOString()
          }]
        };
      });

      progress[roleSpecificCourse.id] = {
        completedModules: allModuleIds,
        lastUpdated: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
        lastAccessedModuleId: allModuleIds[allModuleIds.length - 1],
        quizScores: Object.keys(quizScores).length > 0 ? quizScores : undefined,
        certificate: {
          id: `cert_${roleSpecificCourse.id}_${userId}`,
          issuedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
        }
      };
    }

    // Partially complete another course (60-80%)
    const optionalCourse = courses.find(c => c.category === 'optional');
    if (optionalCourse) {
      const allModuleIds = optionalCourse.sections?.flatMap(s => s.modules || []).map(m => m.id) || [];
      const completedCount = Math.floor(allModuleIds.length * 0.7);
      const completedModules = allModuleIds.slice(0, completedCount);
      const courseQuizzes = quizzes.filter(q => 
        completedModules.some(moduleId => q.moduleId === moduleId)
      );

      const quizScores: any = {};
      courseQuizzes.forEach((quiz, index) => {
        const score = 80 + Math.floor(Math.random() * 15);
        quizScores[quiz.id] = {
          score: score,
          attempts: 1,
          passed: true,
          completedAt: new Date(Date.now() - (5 - index) * 24 * 60 * 60 * 1000).toISOString(),
          history: [{
            score: score,
            passed: true,
            completedAt: new Date(Date.now() - (5 - index) * 24 * 60 * 60 * 1000).toISOString()
          }]
        };
      });

      progress[optionalCourse.id] = {
        completedModules: completedModules,
        lastUpdated: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
        lastAccessedModuleId: completedModules[completedModules.length - 1],
        quizScores: Object.keys(quizScores).length > 0 ? quizScores : undefined
      };
    }

    // Update user document in Firestore
    const userRef = doc(db, 'users', userId);
    await setDoc(userRef, {
      progress: progress
    }, { merge: true });

    return {
      success: true,
      message: 'Demo account data updated successfully!'
    };
  } catch (error: any) {
    console.error('Error updating demo account:', error);
    throw error;
  }
};

