import React, { useState } from 'react';
import { seedDatabase } from '../services/seed';
import { createDemoAccount, updateDemoAccountData, DEMO_ACCOUNT } from '../services/demoAccount';
import { Header } from '../components/Header';
import { User } from '../types';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

interface AdminSeedProps {
    user: User;
    onLogout: () => void;
}

export const AdminSeed: React.FC<AdminSeedProps> = ({ user, onLogout }) => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');
    const [demoStatus, setDemoStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [demoMessage, setDemoMessage] = useState('');
    const [showCredentials, setShowCredentials] = useState(false);

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

    const handleCreateDemoAccount = async () => {
        setDemoStatus('loading');
        setDemoMessage('');
        setShowCredentials(false);
        
        try {
            const result = await createDemoAccount();
            
            if (result.exists) {
                // Try to update existing account data
                try {
                    // Sign in temporarily to get user ID
                    const userCredential = await signInWithEmailAndPassword(
                        auth,
                        DEMO_ACCOUNT.email,
                        DEMO_ACCOUNT.password
                    );
                    await updateDemoAccountData(userCredential.user.uid);
                    await signOut(auth);
                    
                    setDemoStatus('success');
                    setDemoMessage('Demo account data refreshed successfully!');
                    setShowCredentials(true);
                } catch (updateError: any) {
                    setDemoStatus('success');
                    setDemoMessage(result.message);
                    setShowCredentials(true);
                }
            } else {
                setDemoStatus('success');
                setDemoMessage(result.message);
                setShowCredentials(true);
            }
        } catch (error: any) {
            setDemoStatus('error');
            setDemoMessage(`Error: ${error.message}`);
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
            <Header user={user} onLogout={onLogout} showSearch={false} />
            <main className="flex-1 flex items-center justify-center p-6">
                <div className="max-w-2xl w-full space-y-6">
                    {/* Database Migration Section */}
                    <div className="bg-card-light dark:bg-card-dark p-8 rounded-xl shadow-lg border border-border-light dark:border-border-dark text-center">
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

                    {/* Demo Account Section */}
                    <div className="bg-card-light dark:bg-card-dark p-8 rounded-xl shadow-lg border border-border-light dark:border-border-dark text-center">
                        <span className="material-symbols-outlined text-6xl text-primary mb-4">person_add</span>
                        <h1 className="text-2xl font-bold text-text-light-primary dark:text-text-dark-primary mb-2">Create Demo Account</h1>
                        <p className="text-text-light-secondary dark:text-text-dark-secondary mb-6">
                            Create a demo account with realistic progress data for showcasing the LMS in your portfolio.
                        </p>

                        {demoStatus === 'idle' && (
                            <button
                                onClick={handleCreateDemoAccount}
                                className="w-full py-3 bg-primary text-black rounded-lg font-bold hover:bg-primary/90 transition-colors"
                            >
                                Create Demo Account
                            </button>
                        )}

                        {demoStatus === 'loading' && (
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                                <p className="text-sm font-medium">Creating demo account...</p>
                            </div>
                        )}

                        {demoStatus === 'success' && (
                            <div className="flex flex-col items-center gap-3 animate-fade-in">
                                <span className="material-symbols-outlined text-4xl text-green-500">check_circle</span>
                                <p className="text-green-600 font-bold">{demoMessage}</p>
                                
                                {showCredentials && (
                                    <div className="mt-4 p-4 bg-background-light dark:bg-background-dark rounded-lg border border-border-light dark:border-border-dark text-left w-full">
                                        <p className="text-sm font-semibold text-text-light-primary dark:text-text-dark-primary mb-2">Demo Account Credentials:</p>
                                        <div className="space-y-2 text-sm">
                                            <div>
                                                <span className="font-medium text-text-light-secondary dark:text-text-dark-secondary">Email:</span>
                                                <span className="ml-2 font-mono text-primary">{DEMO_ACCOUNT.email}</span>
                                            </div>
                                            <div>
                                                <span className="font-medium text-text-light-secondary dark:text-text-dark-secondary">Password:</span>
                                                <span className="ml-2 font-mono text-primary">{DEMO_ACCOUNT.password}</span>
                                            </div>
                                        </div>
                                        <p className="mt-3 text-xs text-text-light-secondary dark:text-text-dark-secondary">
                                            This account includes completed courses, quiz scores, and certificates for demonstration purposes.
                                        </p>
                                    </div>
                                )}
                                
                                <button
                                    onClick={() => {
                                        setDemoStatus('idle');
                                        setShowCredentials(false);
                                    }}
                                    className="mt-2 text-sm text-text-light-secondary hover:text-primary underline"
                                >
                                    Reset
                                </button>
                            </div>
                        )}

                        {demoStatus === 'error' && (
                            <div className="flex flex-col items-center gap-3 animate-fade-in">
                                <span className="material-symbols-outlined text-4xl text-red-500">error</span>
                                <p className="text-red-600 font-bold">{demoMessage}</p>
                                <button
                                    onClick={() => {
                                        setDemoStatus('idle');
                                        setShowCredentials(false);
                                    }}
                                    className="mt-2 text-sm text-text-light-secondary hover:text-primary underline"
                                >
                                    Try Again
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};
