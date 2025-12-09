import React, { useState, useEffect } from 'react';
import { User } from '../types';

interface UserAvatarProps {
    user: User;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
    onClick?: () => void;
}

export const UserAvatar: React.FC<UserAvatarProps> = ({ user, size = 'md', className = '', onClick }) => {
    const [error, setError] = useState(false);

    useEffect(() => {
        setError(false);
    }, [user.avatar]);

    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map(n => n[0])
            .slice(0, 2)
            .join('')
            .toUpperCase();
    };

    const getDimensions = () => {
        switch (size) {
            case 'sm': return 'h-8 w-8 text-xs';
            case 'md': return 'h-9 w-9 text-xs'; // Header default
            case 'lg': return 'h-10 w-10 text-sm'; // Sidebar default
            case 'xl': return 'h-32 w-32 text-4xl'; // Profile default
            default: return 'h-10 w-10 text-sm';
        }
    };

    const sizeClass = getDimensions();

    if (!user.avatar || error) {
        return (
            <div
                className={`flex items-center justify-center rounded-full bg-primary text-brand-black font-bold border border-border-light dark:border-border-dark ${sizeClass} ${className}`}
                title={user.name}
                onClick={onClick}
            >
                {getInitials(user.name)}
            </div>
        );
    }

    return (
        <img
            src={user.avatar}
            alt={user.name}
            className={`object-cover rounded-full border border-border-light dark:border-border-dark ${sizeClass} ${className}`}
            onError={() => setError(true)}
            title={user.name}
            onClick={onClick}
        />
    );
};
