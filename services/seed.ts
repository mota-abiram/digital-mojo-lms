import { db } from '../firebaseConfig';
import { collection, doc, writeBatch } from 'firebase/firestore';
import { MOCK_COURSES, MOCK_QUIZZES } from '../constants';

export const seedDatabase = async () => {
    try {
        const batch = writeBatch(db);
        let operationCount = 0;

        // Seed Courses
        console.log("Seeding courses...");
        MOCK_COURSES.forEach(course => {
            const courseRef = doc(db, 'courses', course.id);
            batch.set(courseRef, course);
            operationCount++;
        });

        // Seed Quizzes
        console.log("Seeding quizzes...");
        Object.values(MOCK_QUIZZES).forEach(quiz => {
            const quizRef = doc(db, 'quizzes', quiz.id);
            batch.set(quizRef, quiz);
            operationCount++;
        });

        // Commit the batch
        await batch.commit();
        console.log(`Successfully seeded ${operationCount} documents.`);
        return { success: true, count: operationCount };
    } catch (error) {
        console.error("Error seeding database:", error);
        throw error;
    }
};
