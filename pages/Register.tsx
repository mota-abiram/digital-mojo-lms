import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/db';
import { User } from '../types';

interface RegisterProps {
    user?: User | null;
}

export const Register: React.FC<RegisterProps> = ({ user }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'user', // Default role is ALWAYS user
        department: 'Sales'
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            await registerUser(
                formData.email,
                formData.password,
                formData.name,
                formData.role,
                formData.department
            );
            // Registration successful, show success message
            setSuccess(true);
        } catch (err: any) {
            console.error(err);
            if (err.code === 'auth/email-already-in-use') {
                setError('This email is already registered.');
            } else {
                setError(`Registration failed: ${err.message}`);
            }
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark p-4">
                <div className="w-full max-w-md bg-card-light dark:bg-card-dark rounded-xl shadow-lg p-8 border border-border-light dark:border-border-dark text-center">
                    <div className="mb-4 flex justify-center">
                        <span className="material-symbols-outlined text-6xl text-success">check_circle</span>
                    </div>
                    <h1 className="text-2xl font-bold text-text-light-primary dark:text-text-dark-primary mb-2">Account Created!</h1>
                    <p className="text-text-light-secondary dark:text-text-dark-secondary mb-6">
                        Your account has been successfully created. You can now log in with your credentials.
                    </p>
                    <button
                        onClick={() => navigate('/login')}
                        className="w-full py-3 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 transition-colors"
                    >
                        Go to Login
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark p-4">
            <div className="w-full max-w-md bg-card-light dark:bg-card-dark rounded-xl shadow-lg p-8 border border-border-light dark:border-border-dark">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-text-light-primary dark:text-text-dark-primary">Create Account</h1>
                    <p className="text-text-light-secondary dark:text-text-dark-secondary mt-2">Join Digital Mojo LMS</p>
                </div>

                {error && (
                    <div className="mb-6 p-3 bg-warning/10 border border-warning/30 text-warning rounded text-sm">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-text-light-primary dark:text-text-dark-primary mb-1">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="w-full px-4 py-2 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-2 focus:ring-primary outline-none"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-text-light-primary dark:text-text-dark-primary mb-1">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="w-full px-4 py-2 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-2 focus:ring-primary outline-none"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-text-light-primary dark:text-text-dark-primary mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            required
                            minLength={6}
                            className="w-full px-4 py-2 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-2 focus:ring-primary outline-none"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        {/* Role selection removed - hidden from user */}
                        <div>
                            <label className="block text-sm font-medium text-text-light-primary dark:text-text-dark-primary mb-1">Department</label>
                            <select
                                name="department"
                                className="w-full px-4 py-2 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-2 focus:ring-primary outline-none"
                                value={formData.department}
                                onChange={handleChange}
                            >
                                <option value="Sales">Sales</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Engineering">Engineering</option>
                                <option value="HR">HR</option>
                            </select>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 transition-colors disabled:opacity-50 mt-6"
                    >
                        {loading ? 'Creating Account...' : 'Sign Up'}
                    </button>
                </form>

                <div className="mt-6 text-center text-sm">
                    <span className="text-text-light-secondary dark:text-text-dark-secondary">Already have an account? </span>
                    <button onClick={() => navigate('/login')} className="text-primary hover:underline font-medium">Log In</button>
                </div>
            </div>
        </div>
    );
};
