import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../types';

interface AdminDashboardProps {
    user: User;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ user }) => {
    return (
        <div className="p-8 max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-primary/10 text-primary rounded-full">
                    <span className="material-symbols-outlined text-3xl">admin_panel_settings</span>
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-text-light-primary dark:text-text-dark-primary">Admin Console</h1>
                    <p className="text-text-light-secondary dark:text-text-dark-secondary">Manage your LMS content and users</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Course Manager Card */}
                <Link to="/admin/courses" className="group p-6 bg-card-light dark:bg-card-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark hover:shadow-md transition-all">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-blue-100 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined">library_books</span>
                        </div>
                        <span className="material-symbols-outlined text-gray-400 group-hover:text-blue-600 transition-colors">arrow_forward</span>
                    </div>
                    <h3 className="text-lg font-bold text-text-light-primary dark:text-text-dark-primary mb-1">Course Manager</h3>
                    <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary">Create, edit, and manage courses.</p>
                </Link>

                {/* Analytics Card */}
                <Link to="/admin/analytics" className="group p-6 bg-card-light dark:bg-card-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark hover:shadow-md transition-all">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-black transition-colors">
                            <span className="material-symbols-outlined">analytics</span>
                        </div>
                        <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">arrow_forward</span>
                    </div>
                    <h3 className="text-lg font-bold text-text-light-primary dark:text-text-dark-primary mb-1">Analytics</h3>
                    <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary">View user progress and completion rates.</p>
                </Link>

                {/* Database Seed Card */}
                <Link to="/admin/seed" className="group p-6 bg-card-light dark:bg-card-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark hover:shadow-md transition-all">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-warning/10 text-warning rounded-lg group-hover:bg-warning group-hover:text-black transition-colors">
                            <span className="material-symbols-outlined">database</span>
                        </div>
                        <span className="material-symbols-outlined text-gray-400 group-hover:text-warning transition-colors">arrow_forward</span>
                    </div>
                    <h3 className="text-lg font-bold text-text-light-primary dark:text-text-dark-primary mb-1">Database Migration</h3>
                    <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary">Seed database with mock data.</p>
                </Link>
            </div>
        </div>
    );
};
