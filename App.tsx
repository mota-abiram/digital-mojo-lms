import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';

import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Dashboard } from './pages/Dashboard';
import { CourseViewer } from './pages/CourseViewer';
import { QuizPage } from './pages/Quiz';
import { PlaceholderPage } from './pages/PlaceholderPage';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';

import { MOCK_USER } from './constants';
import { User } from './types';

import { getUserData, logoutUser } from './services/db';
import { auth } from './firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';


// Layout wrapper for Authenticated Routes that need sidebar
const MainLayout: React.FC<{
  user: User;
  onLogout: () => void;
  children: React.ReactNode;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
}> = ({ user, onLogout, children, searchQuery, onSearchChange }) => {
  const location = useLocation();
  const activeRoute = location.pathname.substring(1) || 'dashboard';
  const navigate = (path: string) => { window.location.hash = `/${path}`; };

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-200">
      <Header
        user={user}
        onLogout={onLogout}
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
      />
      <div className="flex flex-1 relative">
        <Sidebar
          user={user}
          activeRoute={activeRoute}
          onNavigate={navigate}
          onLogout={onLogout}
        />

        <main className="flex-1 w-full md:ml-64 p-0">
          {children}
        </main>
      </div>
    </div>
  );
};


export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const userData = await getUserData(firebaseUser.uid, firebaseUser.email);
        if (userData) {
          setUser(userData);
        } else {
          // If no data found and not mock user, we might want to handle this.
          // For now, we can just set a basic user object or redirect to a setup page.
          // But since we have registration, this case should ideally not happen unless manual DB deletion.
          // Let's set a minimal user object so they can at least see the dashboard (albeit empty)
          setUser({
            id: firebaseUser.uid,
            name: firebaseUser.displayName || 'User',
            email: firebaseUser.email || '',
            avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(firebaseUser.email || 'U')}&background=random`,
            role: 'Member',
            department: 'General',
            joinDate: new Date().toLocaleDateString()
          });
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await logoutUser();
    setSearchQuery('');
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-background-light dark:bg-background-dark text-text-light-primary dark:text-text-dark-primary">
        Loading...
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/dashboard" replace />}
        />

        <Route
          path="/register"
          element={<Register user={user} />}
        />

        <Route
          path="/dashboard"
          element={user ? (
            <MainLayout
              user={user}
              onLogout={handleLogout}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            >
              <Dashboard user={user} searchQuery={searchQuery} />
            </MainLayout>
          ) : <Navigate to="/login" replace />}
        />

        <Route
          path="/wiki"
          element={user ? (
            <MainLayout user={user} onLogout={handleLogout}>
              <PlaceholderPage title="Company Wiki" type="wiki" />
            </MainLayout>
          ) : <Navigate to="/login" replace />}
        />

        <Route
          path="/directory"
          element={user ? (
            <MainLayout user={user} onLogout={handleLogout}>
              <PlaceholderPage title="Team Directory" type="directory" />
            </MainLayout>
          ) : <Navigate to="/login" replace />}
        />

        <Route
          path="/profile"
          element={user ? (
            <MainLayout user={user} onLogout={handleLogout}>
              <PlaceholderPage title="My Profile" type="profile" />
            </MainLayout>
          ) : <Navigate to="/login" replace />}
        />

        <Route
          path="/support"
          element={user ? (
            <MainLayout user={user} onLogout={handleLogout}>
              <PlaceholderPage title="IT & HR Support" type="support" />
            </MainLayout>
          ) : <Navigate to="/login" replace />}
        />

        {/* Course and Quiz */}
        <Route
          path="/course/:courseId"
          element={user ? <CourseViewer user={user} onLogout={handleLogout} /> : <Navigate to="/login" replace />}
        />

        <Route
          path="/course/:courseId/quiz/:quizId"
          element={user ? <QuizPage user={user} onLogout={handleLogout} /> : <Navigate to="/login" replace />}
        />

        <Route path="*" element={<Navigate to={user ? "/dashboard" : "/login"} replace />} />
      </Routes>
    </Router>
  );
}
