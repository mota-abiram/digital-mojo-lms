import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { User } from '../types';

interface ProtectedRouteProps {
    user: User | null;
    allowedRoles?: string[];
    redirectPath?: string;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
    user,
    allowedRoles = [],
    redirectPath = '/dashboard'
}) => {
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    // If allowedRoles is provided, check if user has permission
    if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
        return <Navigate to={redirectPath} replace />;
    }

    return <Outlet />;
};
