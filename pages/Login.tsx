
import React, { useState } from 'react';

import { loginWithEmail } from '../services/db';

interface LoginProps {
  onLogin: () => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await loginWithEmail(email, password);
      // onLogin is no longer strictly needed if App.tsx listens to auth state, 
      // but we can keep it for any immediate UI feedback if passed
      if (onLogin) onLogin();
    } catch (err: any) {
      setError('Login failed. Please check your credentials.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPass = (e: React.MouseEvent) => {
    e.preventDefault();
    alert('Password reset link sent to your email.');
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
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 text-text-light-secondary dark:text-text-dark-secondary hover:text-primary"
                    >
                      <span className="material-symbols-outlined text-[20px]">{showPassword ? 'visibility' : 'visibility_off'}</span>
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-1">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                    <span className="text-sm text-text-light-secondary dark:text-text-dark-secondary">Remember me</span>
                  </label>
                  <button onClick={handleForgotPass} className="text-sm font-medium text-primary hover:underline">Forgot Password?</button>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-lg bg-primary h-12 px-6 text-base font-bold text-white shadow-lg shadow-primary/30 hover:bg-primary/90 hover:shadow-primary/50 transition-all duration-200"
                  >
                    Log In
                  </button>
                </div>

                <div className="pt-4 text-center">
                  <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary">Don't have an account? <button onClick={() => window.location.hash = '#/register'} className="font-medium text-primary hover:underline">Create an account</button></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
