
import React, { useState } from 'react';

import { loginWithEmail, resetPassword } from '../services/db'; // Assuming resetPassword will be added to db.ts, or import directly from firebase/auth if preferred, but keeping service layer clean is better.
// Actually, let's just import from firebase/auth here for speed if db.ts doesn't have it, OR update db.ts.
// Let's update this file to use a new resetPassword function I'll add to db.ts in a moment.
// For now, I'll add the state and the handler structure.

interface LoginProps {
  onLogin: () => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const isValid = email.length > 0 && password.length > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    setError('');
    setLoading(true);
    try {
      await loginWithEmail(email, password, rememberMe);
      if (onLogin) onLogin();
    } catch (err: any) {
      console.error("Login Error:", err);
      // Firebase Auth Error Handling
      const errorCode = err.code;
      if (errorCode === 'auth/invalid-credential' || errorCode === 'auth/wrong-password' || errorCode === 'auth/user-not-found') {
        setError('Incorrect email or password. Please try again.');
      } else if (errorCode === 'auth/invalid-email') {
        setError('Please enter a valid email address.');
      } else if (errorCode === 'auth/too-many-requests') {
        setError('Access temporarily blocked due to too many failed attempts. Please reset your password or try again later.');
      } else if (errorCode === 'auth/network-request-failed') {
        setError('Network error. Please check your internet connection.');
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPass = async (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent any default button behavior
    e.stopPropagation(); // Stop event bubbling

    if (!email) {
      setError('Please enter your email address first to reset password.');
      return;
    }

    // Simple email regex for basic validation before sending
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      await resetPassword(email);
      alert(`Password reset link sent to ${email}. Please check your inbox (and spam folder).`);
      setError(''); // Clear any previous errors
    } catch (err: any) {
      console.error(err);
      if (err.code === 'auth/user-not-found') {
        // For security, we might not want to say "user not found", but for UX it helps.
        // Firebase often doesn't throw this for reset emails to prevent enumeration, 
        // but if it does:
        setError('No account found with this email address.');
      } else {
        setError('Failed to send reset email. Please try again.');
      }
    }
  };

  const handleContactAdmin = (e: React.MouseEvent) => {
    e.preventDefault();
    alert('Please contact admin@digitalmojo.com for support.');
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <div className="flex flex-1 w-full">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-screen">

          {/* Left Column - Hero */}
          <div className="relative hidden lg:flex flex-col items-center justify-center bg-background-dark text-white p-12">
            <div className="absolute inset-0 z-0">
              <img
                className="h-full w-full object-cover opacity-40 mix-blend-overlay"
                src="https://picsum.photos/seed/digitalmojo/1600/1200"
                alt="Digital office environment"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-background-dark/80 to-background-dark/95"></div>
            </div>
            <div className="relative z-10 flex flex-col items-start max-w-md space-y-6">
              <div className="flex items-center space-x-3">
                <span className="material-symbols-outlined text-5xl text-primary">rocket_launch</span>
                <span className="text-3xl font-bold tracking-wide">Digital Mojo</span>
              </div>
              <h1 className="text-5xl font-bold leading-tight">Elevate Your Digital Skills.</h1>
              <p className="text-xl text-gray-300">Empowering Account Managers, Developers, and Marketers to achieve excellence.</p>

              <div className="flex gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span className="material-symbols-outlined text-green-400">check_circle</span>
                  <span>Industry Expert Content</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span className="material-symbols-outlined text-green-400">check_circle</span>
                  <span>Career Focused</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="flex flex-col items-center justify-center p-6 sm:p-12 bg-card-light dark:bg-background-dark">
            <div className="w-full max-w-md">
              <div className="flex flex-col items-center lg:hidden mb-10">
                <div className="flex items-center space-x-3 text-text-light-primary dark:text-text-dark-primary">
                  <span className="material-symbols-outlined text-4xl text-primary">rocket_launch</span>
                  <span className="text-2xl font-bold tracking-wide">Digital Mojo</span>
                </div>
              </div>

              <div className="text-center lg:text-left mb-8">
                <h1 className="text-text-light-primary dark:text-text-dark-primary tracking-tight text-[32px] font-bold leading-tight">Welcome Back</h1>
                <p className="text-text-light-secondary dark:text-text-dark-secondary text-base font-normal leading-normal pt-2">Please enter your details to log in.</p>
              </div>

              {/* Error Message Box */}
              {error && (
                <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 flex items-start gap-3 animate-pulse">
                  <span className="material-symbols-outlined text-red-600 text-xl mt-0.5">error</span>
                  <p className="text-sm text-red-700 font-medium">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
                <div className="flex flex-col space-y-2">
                  <label className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium">Email Address</label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-4 text-text-light-secondary dark:text-text-dark-secondary text-[20px]">mail</span>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-card-dark h-12 pl-12 pr-4 text-base focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-none"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <label className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium">Password</label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-4 text-text-light-secondary dark:text-text-dark-secondary text-[20px]">lock</span>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="w-full rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-card-dark h-12 pl-12 pr-12 text-base focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-none"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button" // CRITICAL: Prevents Enter key from triggering this button
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 text-text-light-secondary dark:text-text-dark-secondary hover:text-primary focus:outline-none"
                    >
                      <span className="material-symbols-outlined text-[20px]">{showPassword ? 'visibility' : 'visibility_off'}</span>
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-1">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-primary focus:ring-primary transition-colors"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <span className="text-sm text-text-light-secondary dark:text-text-dark-secondary group-hover:text-primary transition-colors">Remember me</span>
                  </label>
                  <button
                    type="button" // CRITICAL: Prevents Enter key from triggering this button
                    onClick={handleForgotPass}
                    className="text-sm font-medium text-primary hover:text-brand-purple hover:underline transition-colors focus:outline-none"
                  >
                    Forgot Password?
                  </button>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={!isValid || loading}
                    className={`flex w-full items-center justify-center rounded-lg h-12 px-6 text-base font-bold text-white shadow-lg transition-all duration-200
                        ${!isValid || loading
                        ? 'bg-gray-400 cursor-not-allowed opacity-70'
                        : 'bg-primary hover:bg-primary/90 hover:shadow-primary/50'
                      }`}
                  >
                    {loading ? (
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined animate-spin text-xl">progress_activity</span>
                        <span>Logging In...</span>
                      </div>
                    ) : (
                      'Log In'
                    )}
                  </button>
                </div>

                <div className="pt-4 text-center">
                  <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary">Don't have an account? <button type="button" onClick={() => window.location.hash = '#/register'} className="font-medium text-primary hover:underline focus:outline-none">Create an account</button></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
