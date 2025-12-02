
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface PlaceholderPageProps {
  title: string;
  type: 'wiki' | 'directory' | 'profile' | 'support' | 'community' | 'messages' | 'settings';
}

export const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title, type }) => {
  const navigate = useNavigate();

  const getIcon = () => {
    switch (type) {
      case 'wiki': return 'menu_book';
      case 'directory': return 'groups';
      case 'profile': return 'person';
      case 'support': return 'support_agent';
      default: return 'construction';
    }
  };

  const getDescription = () => {
    switch (type) {
      case 'wiki': return 'Browse company policies, SOPs, and learning resources here.';
      case 'directory': return 'Find contact information for everyone in the Digital Mojo team.';
      case 'profile': return 'Manage your account settings, password, and notification preferences.';
      case 'support': return 'Get help with IT issues, HR queries, or LMS technical support.';
      default: return 'This feature is currently under development.';
    }
  };

  return (
    <div className="flex flex-col h-full items-center justify-center p-8 bg-background-light dark:bg-background-dark text-center">
      <div className="bg-card-light dark:bg-card-dark p-12 rounded-2xl shadow-sm border border-border-light dark:border-border-dark max-w-lg w-full flex flex-col items-center gap-6">
        <div className="size-24 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="material-symbols-outlined text-6xl text-primary">{getIcon()}</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-text-light-primary dark:text-text-dark-primary">{title}</h1>
          <p className="text-text-light-secondary dark:text-text-dark-secondary text-lg">
            {getDescription()}
          </p>
        </div>

        <div className="h-px w-full bg-border-light dark:bg-border-dark my-2"></div>

        <button
          onClick={() => navigate('/dashboard')}
          className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-bold hover:bg-primary/90 transition-colors"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};
