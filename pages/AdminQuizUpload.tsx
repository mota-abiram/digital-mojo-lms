import React, { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { Quiz } from '../types';

export const AdminQuizUpload: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState<Partial<Quiz>>({
        title: '',
        moduleId: '',
        totalQuestions: 0,
        timeLimit: '15:00',
        passingScore: 80,
        questions: []
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await addDoc(collection(db, 'quizzes'), formData);
            alert('Quiz created successfully!');
            setFormData({
                title: '',
                moduleId: '',
                totalQuestions: 0,
                timeLimit: '15:00',
                passingScore: 80,
                questions: []
            });
        } catch (error) {
            console.error("Error creating quiz:", error);
            alert('Failed to create quiz.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-8 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Create New Quiz</h1>
            <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div>
                    <label className="block text-sm font-medium mb-1 dark:text-gray-300">Quiz Title</label>
                    <input
                        type="text"
                        required
                        className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        value={formData.title}
                        onChange={e => setFormData({ ...formData, title: e.target.value })}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1 dark:text-gray-300">Linked Module ID</label>
                    <input
                        type="text"
                        required
                        className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        value={formData.moduleId}
                        onChange={e => setFormData({ ...formData, moduleId: e.target.value })}
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1 dark:text-gray-300">Time Limit (mm:ss)</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            value={formData.timeLimit}
                            onChange={e => setFormData({ ...formData, timeLimit: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1 dark:text-gray-300">Passing Score (%)</label>
                        <input
                            type="number"
                            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            value={formData.passingScore}
                            onChange={e => setFormData({ ...formData, passingScore: Number(e.target.value) })}
                        />
                    </div>
                </div>

                <div className="pt-4">
                    <button
                        type="submit"
                        disabled={loading}
                        className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-50"
                    >
                        {loading ? 'Creating...' : 'Create Quiz'}
                    </button>
                </div>
            </form>
        </div>
    );
};
