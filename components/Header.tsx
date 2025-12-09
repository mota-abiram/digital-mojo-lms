import React from 'react';
import { User } from '../types';
import { UserAvatar } from './UserAvatar';

interface HeaderProps {
  user: User;
  onLogout: () => void;
  showSearch?: boolean;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  darkMode?: boolean;
  toggleTheme?: () => void;
}



export const Header: React.FC<HeaderProps> = ({ user, onLogout, showSearch = true, searchQuery = '', onSearchChange, darkMode, toggleTheme }) => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light px-6 md:px-10 py-3 bg-card-light sticky top-0 z-20">
      <div className="flex items-center gap-4">
        <div className="size-10 flex items-center justify-center">
          <img src="/favicon.png" alt="Digital Mojo" className="w-full h-full object-contain" />
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] hidden sm:block text-text-light-primary">Digital Mojo</h2>
      </div>

      {showSearch && (
        <div className="flex-1 max-w-md mx-4 hidden md:block">
          <div className="flex w-full items-stretch rounded-lg h-10 border border-border-light bg-background-light">
            <div className="text-text-light-secondary flex items-center justify-center pl-3">
              <span className="material-symbols-outlined text-[20px]">search</span>
            </div>
            <input
              className="flex w-full min-w-0 flex-1 bg-transparent border-none focus:ring-0 text-text-light-primary placeholder:text-text-light-secondary text-sm"
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
          className="flex items-center justify-center size-10 rounded-full hover:bg-background-light transition-colors text-text-light-secondary"
          title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          <span className="material-symbols-outlined">
            {darkMode ? 'light_mode' : 'dark_mode'}
          </span>
        </button>



        <UserAvatar user={user} size="md" className="cursor-pointer dark:!border-border-light" />

        <button onClick={onLogout} className="text-sm font-medium text-black hover:text-primary transition-colors hidden sm:block">
          Logout
        </button>
      </div>
    </header>
  );
};