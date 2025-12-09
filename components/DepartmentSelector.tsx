import React, { useState } from 'react';
import { updateUserProfile } from '../services/db';
import { User } from '../types';

interface DepartmentSelectorProps {
    user: User;
    onUpdate: (updatedUser: User) => void;
}

export const DepartmentSelector: React.FC<DepartmentSelectorProps> = ({ user, onUpdate }) => {
    const [department, setDepartment] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!department) {
            setError('Please select a department.');
            return;
        }

        setLoading(true);
        try {
            await updateUserProfile(user.id, { department });
            onUpdate({ ...user, department });
        } catch (err) {
            console.error(err);
            setError('Failed to update department. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="w-full max-w-md bg-card-light dark:bg-card-dark rounded-2xl shadow-2xl p-8 border border-border-light dark:border-border-dark">
                <div className="text-center mb-8">
                    <div className="flex justify-center mb-4">
                        <div className="h-16 w-16 bg-primary/20 rounded-full flex items-center justify-center">
                            <span className="material-symbols-outlined text-primary text-3xl">domain</span>
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold text-text-light-primary dark:text-text-dark-primary mb-2">Select Your Department</h2>
                    <p className="text-text-light-secondary dark:text-text-dark-secondary">
                        Please select your department to continue. This helps us personalize your learning experience.
                    </p>
                </div>

                {error && (
                    <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 text-red-500 rounded-lg text-sm flex items-start gap-3">
                        <span className="material-symbols-outlined text-lg mt-0.5">error</span>
                        <span>{error}</span>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative">
                        <select
                            className="w-full px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-light-primary dark:text-text-dark-primary focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-none appearance-none"
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                        >
                            <option value="">Select Department</option>
                            <option value="Business Development">Business Development</option>
                            <option value="GD Department">GD Department</option>
                            <option value="HR">HR</option>
                            <option value="Management">Management</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Operations">Operations</option>
                            <option value="PPC">PPC</option>
                            <option value="Photography">Photography</option>
                            <option value="SEO">SEO</option>
                            <option value="Social Media">Social Media</option>
                            <option value="Telecaller">Telecaller</option>
                            <option value="Website">Website</option>
                            <option value="Interns">Interns</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"></span>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3.5 bg-primary text-black rounded-lg font-bold text-lg hover:bg-primary/90 transition-all transform hover:scale-[1.02] shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                        {loading ? (
                            <div className="flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined animate-spin text-xl">progress_activity</span>
                                <span>Saving...</span>
                            </div>
                        ) : (
                            'Continue'
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};
