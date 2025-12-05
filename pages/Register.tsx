import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser, loginWithGoogle } from '../services/db';
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
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

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
                formData.role
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
            <div className="min-h-screen flex items-center justify-center bg-[#9ca3af] bg-[radial-gradient(#4b5563_1px,transparent_1px)] [background-size:20px_20px] p-4">
                <div className="w-full max-w-md bg-black rounded-2xl shadow-2xl p-8 border border-gray-800 text-center">
                    <div className="mb-6 flex justify-center">
                        <div className="h-20 w-20 bg-brand-yellow/20 rounded-full flex items-center justify-center">
                            <span className="material-symbols-outlined text-5xl text-brand-yellow">check_circle</span>
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-3">Account Created!</h1>
                    <p className="text-gray-400 mb-8 text-lg">
                        Your account has been successfully created. You can now log in with your credentials.
                    </p>
                    <button
                        onClick={() => navigate('/login')}
                        className="w-full py-3.5 bg-brand-yellow text-black rounded-lg font-bold text-lg hover:bg-brand-yellow/90 transition-all transform hover:scale-[1.02] shadow-lg shadow-brand-yellow/20"
                    >
                        Go to Login
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#9ca3af] bg-[radial-gradient(#4b5563_1px,transparent_1px)] [background-size:20px_20px] p-4 font-display">
            <div className="w-full max-w-[480px] bg-black rounded-2xl shadow-2xl p-8 sm:p-10 border border-gray-800">
                <div className="text-center mb-10">
                    <div className="flex justify-center mb-6">
                        <div className="h-12 w-12 bg-brand-yellow rounded-full flex items-center justify-center">
                            <span className="material-symbols-outlined text-black text-2xl">auto_awesome</span>
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
                    <p className="text-gray-400">Sign up to start your learning journey.</p>
                </div>

                {error && (
                    <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg text-sm flex items-start gap-3">
                        <span className="material-symbols-outlined text-lg mt-0.5">error</span>
                        <span>{error}</span>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1.5">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="Enter your full name"
                            className="w-full px-4 py-3 rounded-lg border border-gray-800 bg-[#111] text-white placeholder-gray-500 focus:ring-2 focus:ring-brand-yellow/50 focus:border-brand-yellow transition-all outline-none"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1.5">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 rounded-lg border border-gray-800 bg-[#111] text-white placeholder-gray-500 focus:ring-2 focus:ring-brand-yellow/50 focus:border-brand-yellow transition-all outline-none"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1.5">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                required
                                minLength={6}
                                placeholder="Create a password"
                                className="w-full px-4 py-3 rounded-lg border border-gray-800 bg-[#111] text-white placeholder-gray-500 focus:ring-2 focus:ring-brand-yellow/50 focus:border-brand-yellow transition-all outline-none pr-12"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-brand-yellow transition-colors focus:outline-none"
                            >
                                <span className="material-symbols-outlined text-[20px]">
                                    {showPassword ? 'visibility' : 'visibility_off'}
                                </span>
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3.5 bg-brand-yellow text-black rounded-lg font-bold text-lg hover:bg-brand-yellow/90 transition-all transform hover:scale-[1.02] shadow-lg shadow-brand-yellow/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none mt-2"
                    >
                        {loading ? (
                            <div className="flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined animate-spin text-xl">progress_activity</span>
                                <span>Creating Account...</span>
                            </div>
                        ) : (
                            'Sign Up'
                        )}
                    </button>
                </form>

                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-800"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-black text-gray-500">Or continue with</span>
                        </div>
                    </div>

                    <button
                        onClick={async () => {
                            try {
                                await loginWithGoogle();
                                navigate('/dashboard');
                            } catch (error: any) {
                                setError(error.message || "Google Sign-In failed.");
                            }
                        }}
                        className="mt-6 w-full py-3.5 bg-white text-black rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3"
                    >
                        <img src="https://www.google.com/favicon.ico" alt="Google" className="w-6 h-6" />
                        Sign up with Google
                    </button>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-gray-400">
                        Already have an account?{' '}
                        <button
                            onClick={() => navigate('/login')}
                            className="text-brand-yellow hover:text-brand-yellow/80 font-medium hover:underline transition-colors"
                        >
                            Log In
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};
