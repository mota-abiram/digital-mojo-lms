import React from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { User } from '../types';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

interface MainLayoutProps {
    user: User;
    onLogout: () => void;
    children?: React.ReactNode; // Optional now
    searchQuery?: string;
    onSearchChange?: (query: string) => void;
    darkMode?: boolean;
    toggleTheme?: () => void;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
    user,
    onLogout,
    searchQuery,
    onSearchChange,
    darkMode,
    toggleTheme
}) => {
    const location = useLocation();
    const activeRoute = location.pathname.substring(1) || 'dashboard';

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-200">
            <Header
                user={user}
                onLogout={onLogout}
                searchQuery={searchQuery}
                onSearchChange={onSearchChange}
                darkMode={darkMode}
                toggleTheme={toggleTheme}
            />
            <div className="flex flex-1 relative">
                <Sidebar
                    user={user}
                    activeRoute={activeRoute}
                    onLogout={onLogout}
                />

                <main className="flex-1 w-full md:ml-64 p-0">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};
