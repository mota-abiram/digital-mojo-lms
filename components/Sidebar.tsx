import React from 'react';
import { User } from '../types';
import { NavLink } from 'react-router-dom';

interface SidebarProps {
  user: User;
  activeRoute: string; // Kept for compatibility if needed, but NavLink handles active state
  onLogout: () => void;
}

import { UserAvatar } from './UserAvatar';

export const Sidebar: React.FC<SidebarProps> = ({ user, onLogout }) => {
  const menuItems = [
    { id: 'dashboard', path: '/dashboard', icon: 'dashboard', label: 'Onboarding Hub' },
    { id: 'courses', path: '/courses', icon: 'school', label: 'Learning Center' },
    { id: 'profile', path: '/profile', icon: 'person', label: 'My Profile' },
  ];

  // Hidden Admin Link
  if (user.role === 'admin' || user.role === 'Admin') {
    menuItems.push({ id: 'admin', path: '/admin', icon: 'admin_panel_settings', label: 'Admin Console' });
  }

  return (
    <aside className="fixed top-[65px] left-0 z-10 flex h-[calc(100vh-65px)] w-64 flex-col border-r border-border-light bg-card-light dark:border-border-dark dark:bg-card-dark transition-transform -translate-x-full md:translate-x-0">
      <div className="flex h-full flex-col justify-between p-4">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3 rounded-lg px-3 py-2 bg-background-light dark:bg-background-dark/50">
            <UserAvatar user={user} size="lg" />
            <div className="flex flex-col overflow-hidden">
              <h1 className="text-m font-bold leading-normal truncate">{user.name}</h1>
              <p className="text-text-light-secondary dark:text-text-dark-secondary text-m font-normal leading-normal truncate">{user.role}</p>
            </div>
          </div>

          <nav className="flex flex-col gap-2">
            {menuItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) => `flex items-center gap-3 px-3 py-3 rounded-r-lg transition-all duration-200 w-full text-left ${isActive
                  ? 'bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white font-bold shadow-sm'
                  : 'text-text-light-primary dark:text-text-dark-primary hover:bg-background-light dark:hover:bg-background-dark'
                  }`}
              >
                <span className={`material-symbols-outlined`}>{item.icon}</span>
                <p className="text-base font-bold leading-normal">{item.label}</p>
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-2 border-t border-border-light dark:border-border-dark pt-4">

          <button onClick={onLogout} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/10 hover:text-red-600 transition-colors w-full text-left text-black dark:text-white">
            <span className="material-symbols-outlined">logout</span>
            <p className="text-sm font-medium leading-normal">Logout</p>
          </button>
        </div>
      </div>
    </aside>
  );
};