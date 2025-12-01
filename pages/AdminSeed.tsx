import React, { useState } from 'react';
import { seedDatabase } from '../services/seed';
import { Header } from '../components/Header';
import { User } from '../types';

interface AdminSeedProps {
    user: User;
    onLogout: () => void;
}

export const AdminSeed: React.FC<AdminSeedProps> = ({ user, onLogout }) => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSeed = async () => {
        if (!window.confirm("This will overwrite existing data in the 'courses' and 'quizzes' collections. Continue?")) {
            return;
        }

        setStatus('loading');
        try {
            const result = await seedDatabase();
            setStatus('success');
            setMessage(`Successfully uploaded ${result.count} documents to Firestore.`);
        } catch (error: any) {
            setStatus('error');
            setMessage(`Error: ${error.message}`);
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
            <Header user={user} onLogout={onLogout} showSearch={false} />
            <main className="flex-1 flex items-center justify-center p-6">
                <div className="bg-card-light dark:bg-card-dark p-8 rounded-xl shadow-lg max-w-md w-full border border-border-light dark:border-border-dark text-center">
                    <span className="material-symbols-outlined text-6xl text-primary mb-4">database</span>
                    <h1 className="text-2xl font-bold text-text-light-primary dark:text-text-dark-primary mb-2">Database Migration</h1>
                    <p className="text-text-light-secondary dark:text-text-dark-secondary mb-6">
                        Upload local constants (Courses & Quizzes) to Firestore.
                    </p>

                    {status === 'idle' && (
                        <button
                            onClick={handleSeed}
                            className="w-full py-3 bg-primary text-black rounded-lg font-bold hover:bg-primary/90 transition-colors"
                        >
                            Start Migration
                        </button>
                    )}

                    {status === 'loading' && (
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                            <p className="text-sm font-medium">Uploading data...</p>
                        </div>
                    )}

                    {status === 'success' && (
                        <div className="flex flex-col items-center gap-3 animate-fade-in">
                            <span className="material-symbols-outlined text-4xl text-green-500">check_circle</span>
                            <p className="text-green-600 font-bold">{message}</p>
                            <button
                                onClick={() => setStatus('idle')}
                                className="mt-2 text-sm text-text-light-secondary hover:text-primary underline"
                            >
                                Reset
                            </button>
                        </div>
                    )}

                    {status === 'error' && (
                        <div className="flex flex-col items-center gap-3 animate-fade-in">
                            <span className="material-symbols-outlined text-4xl text-red-500">error</span>
                            <p className="text-red-600 font-bold">{message}</p>
                            <button
                                onClick={() => setStatus('idle')}
                                className="mt-2 text-sm text-text-light-secondary hover:text-primary underline"
                            >
                                Try Again
                            </button>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};
