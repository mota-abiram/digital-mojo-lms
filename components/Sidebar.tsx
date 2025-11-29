import React from 'react';
import { User } from '../types';
import { NavLink } from 'react-router-dom';

interface SidebarProps {
  user: User;
  activeRoute: string; // Kept for compatibility if needed, but NavLink handles active state
  onLogout: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ user, onLogout }) => {
  const menuItems = [
    { id: 'dashboard', path: '/dashboard', icon: 'dashboard', label: 'Onboarding Hub' },
    { id: 'courses', path: '/dashboard', icon: 'school', label: 'Learning Center' },
    { id: 'wiki', path: '/wiki', icon: 'menu_book', label: 'Company Wiki' },
    { id: 'directory', path: '/directory', icon: 'groups', label: 'Team Directory' },
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
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: `url("${user.avatar}")` }}></div>
            <div className="flex flex-col overflow-hidden">
              <h1 className="text-sm font-bold leading-normal truncate">{user.name}</h1>
              <p className="text-text-light-secondary dark:text-text-dark-secondary text-xs font-normal leading-normal truncate">{user.role}</p>
            </div>
          </div>

          <nav className="flex flex-col gap-2">
            {menuItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) => `flex items-center gap-3 px-3 py-2.5 rounded-r-lg transition-all duration-200 w-full text-left ${isActive
                  ? 'bg-primary/10 text-primary font-bold border-l-4 border-primary shadow-sm'
                  : 'text-text-light-secondary dark:text-text-dark-secondary hover:bg-background-light dark:hover:bg-background-dark hover:text-primary'
                  }`}
              >
                <span className={`material-symbols-outlined`}>{item.icon}</span>
                <p className="text-sm leading-normal">{item.label}</p>
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-2 border-t border-border-light dark:border-border-dark pt-4">
          <NavLink to="/support" className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-background-light dark:hover:bg-background-dark transition-colors w-full text-left ${isActive ? 'bg-primary/10 text-primary font-semibold' : 'text-text-light-secondary dark:text-text-dark-secondary'}`}>
            <span className="material-symbols-outlined">help</span>
            <p className="text-sm font-medium leading-normal">IT Support</p>
          </NavLink>
          <button onClick={onLogout} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/10 hover:text-red-600 transition-colors w-full text-left text-text-light-secondary dark:text-text-dark-secondary">
            <span className="material-symbols-outlined">logout</span>
            <p className="text-sm font-medium leading-normal">Logout</p>
          </button>
        </div>
      </div>
    </aside>
  );
};