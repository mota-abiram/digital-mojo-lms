
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { CourseViewer } from './pages/CourseViewer';
import { QuizPage } from './pages/Quiz';
import { PlaceholderPage } from './pages/PlaceholderPage';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { MOCK_USER } from './constants';
import { User } from './types';

// Layout wrapper for Authenticated Routes that need sidebar
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
      <Header user={user} onLogout={onLogout} searchQuery={searchQuery} onSearchChange={onSearchChange} />
      <div className="flex flex-1 relative">
        <Sidebar user={user} activeRoute={activeRoute} onNavigate={navigate} onLogout={onLogout} />
        {/* Main Content Area - Needs margin left on desktop to account for fixed sidebar */}
        <main className="flex-1 w-full md:ml-64 p-0">
          {children}
        </main>
      </div>
    </div>
  );
};

import { auth, getUserData, logoutUser } from './services/db';
import { onAuthStateChanged } from 'firebase/auth';

// ... (MainLayout remains same)

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // User is signed in, fetch their profile data
        const userData = await getUserData(firebaseUser.uid);
        if (userData) {
          setUser(userData);
        } else {
          // Fallback if no data found (shouldn't happen with proper setup)
          setUser({ ...MOCK_USER, id: firebaseUser.uid, email: firebaseUser.email || '' });
        }
      } else {
        // User is signed out
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
    return <div className="flex h-screen items-center justify-center bg-background-light dark:bg-background-dark text-text-light-primary dark:text-text-dark-primary">Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={!user ? <Login onLogin={handleLogin} /> : <Navigate to="/dashboard" replace />}
        />

        <Route
          path="/dashboard"
          element={user ? (
            <MainLayout user={user} onLogout={handleLogout} searchQuery={searchQuery} onSearchChange={setSearchQuery}>
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

        {/* Note: CourseViewer and Quiz have their own specific layouts defined in their components */}
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
