import React, { useState } from 'react';
import { User } from '../types';

import { UserAvatar } from '../components/UserAvatar';

interface ProfileProps {
    user: User;
}

export const Profile: React.FC<ProfileProps> = ({ user }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: user.name,
        email: user.email,
        role: user.role,
        department: user.department,
        bio: "Passionate learner and team player.",
        notifications: true,
        theme: 'light'
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }));
    };

    const handleSave = async () => {
        if (user.id) {
            try {
                const { updateUserProfile } = await import('../services/db');
                await updateUserProfile(user.id, {
                    name: formData.name,
                    role: formData.role,
                    department: formData.department,
                    // We can also save bio and preferences if we add them to the User type, 
                    // but for now let's persist the core fields that exist on User.
                    // If you want to save bio/prefs, you'd need to update the User interface first.
                    // For now, I'll assume we might want to extend the user object or just save them loosely if Firestore allows (it does).
                    ...formData
                } as any); // Casting to any to allow saving extra fields like bio/prefs to Firestore even if not in strict User type yet

                alert("Profile updated successfully!");
                setIsEditing(false);
            } catch (error) {
                console.error("Failed to update profile", error);
                alert("Failed to update profile. Please try again.");
            }
        }
    };

    return (
        <div className="p-6 md:p-10 flex flex-col gap-8 max-w-4xl mx-auto">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-text-light-primary dark:text-text-dark-primary">My Profile</h1>
                <button
                    onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                    className={`px-6 py-2 rounded-lg font-bold transition-colors ${isEditing
                        ? 'bg-green-500 text-white hover:bg-green-600'
                        : 'bg-primary text-black hover:bg-primary/90'
                        }`}
                >
                    {isEditing ? 'Save Changes' : 'Edit Profile'}
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Column: Avatar & Basic Info */}
                <div className="col-span-1 flex flex-col gap-6">
                    <div className="bg-card-light dark:bg-card-dark p-6 rounded-xl border border-border-light dark:border-border-dark shadow-sm flex flex-col items-center text-center">
                        <div className="relative w-32 h-32 mb-4">
                            <UserAvatar
                                user={user}
                                size="xl"
                                className="w-full h-full border-4 border-background-light dark:border-background-dark shadow-md"
                            />
                            {isEditing && (
                                <button className="absolute bottom-0 right-0 bg-primary text-black p-2 rounded-full shadow-lg hover:bg-primary/90 transition-transform hover:scale-105">
                                    <span className="material-symbols-outlined text-sm">edit</span>
                                </button>
                            )}
                        </div>
                        <h2 className="text-xl font-bold text-text-light-primary dark:text-text-dark-primary">{user.name}</h2>
                        <p className="text-text-light-secondary dark:text-text-dark-secondary text-sm">{user.role}</p>
                        <div className="mt-4 flex gap-2">
                            <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">{user.department}</span>
                        </div>
                    </div>

                    <div className="bg-card-light dark:bg-card-dark p-6 rounded-xl border border-border-light dark:border-border-dark shadow-sm">
                        <h3 className="font-bold text-lg mb-4 text-text-light-primary dark:text-text-dark-primary">Stats</h3>
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between items-center">
                                <span className="text-text-light-secondary dark:text-text-dark-secondary text-sm">Joined</span>
                                <span className="font-medium text-text-light-primary dark:text-text-dark-primary">{user.joinDate}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-text-light-secondary dark:text-text-dark-secondary text-sm">Courses Completed</span>
                                <span className="font-medium text-text-light-primary dark:text-text-dark-primary">
                                    {user.progress ? Object.values(user.progress as any).filter((p: any) => p && p.completedModules && p.completedModules.length > 0).length : 0}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Details & Settings */}
                <div className="col-span-1 md:col-span-2 flex flex-col gap-6">
                    {/* Personal Information */}
                    <div className="bg-card-light dark:bg-card-dark p-6 rounded-xl border border-border-light dark:border-border-dark shadow-sm">
                        <h3 className="font-bold text-lg mb-6 text-text-light-primary dark:text-text-dark-primary flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">person</span>
                            Personal Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold text-text-light-secondary dark:text-text-dark-secondary uppercase">Full Name</label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="p-2 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-2 focus:ring-primary outline-none"
                                    />
                                ) : (
                                    <p className="text-text-light-primary dark:text-text-dark-primary font-medium">{formData.name}</p>
                                )}
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold text-text-light-secondary dark:text-text-dark-secondary uppercase">Email Address</label>
                                <p className="text-text-light-primary dark:text-text-dark-primary font-medium opacity-70">{formData.email} <span className="text-xs text-text-light-secondary">(Read-only)</span></p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold text-text-light-secondary dark:text-text-dark-secondary uppercase">Role</label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="role"
                                        value={formData.role}
                                        onChange={handleChange}
                                        className="p-2 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-2 focus:ring-primary outline-none"
                                    />
                                ) : (
                                    <p className="text-text-light-primary dark:text-text-dark-primary font-medium">{formData.role}</p>
                                )}
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold text-text-light-secondary dark:text-text-dark-secondary uppercase">Department</label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="department"
                                        value={formData.department}
                                        onChange={handleChange}
                                        className="p-2 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-2 focus:ring-primary outline-none"
                                    />
                                ) : (
                                    <p className="text-text-light-primary dark:text-text-dark-primary font-medium">{formData.department}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Settings */}
                </div>
            </div>
        </div>
    );
};
