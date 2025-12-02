import React from 'react';
import { User } from '../types';

interface HeaderProps {
  user: User;
  onLogout: () => void;
  showSearch?: boolean;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  darkMode?: boolean;
  toggleTheme?: () => void;
}

import logo from '../assets/logo.png';

export const Header: React.FC<HeaderProps> = ({ user, onLogout, showSearch = true, searchQuery = '', onSearchChange, darkMode, toggleTheme }) => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light dark:border-border-dark px-6 md:px-10 py-3 bg-card-light dark:bg-card-dark sticky top-0 z-20">
      <div className="flex items-center gap-4">
        <div className="h-10 w-auto">
          <img src={logo} alt="Digital Mojo" className="h-full w-auto object-contain" />
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] hidden sm:block">Digital Mojo</h2>
      </div>

      {showSearch && (
        <div className="flex-1 max-w-md mx-4 hidden md:block">
          <div className="flex w-full items-stretch rounded-lg h-10 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark">
            <div className="text-text-light-secondary dark:text-text-dark-secondary flex items-center justify-center pl-3">
              <span className="material-symbols-outlined text-[20px]">search</span>
            </div>
            <input
              className="flex w-full min-w-0 flex-1 bg-transparent border-none focus:ring-0 text-text-light-primary dark:text-text-dark-primary placeholder:text-text-light-secondary dark:placeholder:text-text-dark-secondary text-sm"
              placeholder="Search for a course..."
              value={searchQuery}
              onChange={(e) => onSearchChange?.(e.target.value)}
            />
          </div>
        </div>
      )}

      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="flex items-center justify-center size-10 rounded-full hover:bg-background-light dark:hover:bg-background-dark transition-colors text-text-light-secondary dark:text-text-dark-secondary"
          title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          <span className="material-symbols-outlined">
            {darkMode ? 'light_mode' : 'dark_mode'}
          </span>
        </button>

        <button className="flex items-center justify-center size-10 rounded-full hover:bg-background-light dark:hover:bg-background-dark transition-colors text-text-light-secondary dark:text-text-dark-secondary">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9 border border-border-light dark:border-border-dark cursor-pointer"
          style={{ backgroundImage: `url("${user.avatar}")` }}
          title={user.name}
        ></div>
        <button onClick={onLogout} className="text-sm font-medium text-white hover:text-primary transition-colors hidden sm:block">
          Logout
        </button>
      </div>
    </header>
  );
};