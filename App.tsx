import React, { useState, useEffect, Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig';
import { getUserData, subscribeToUserData, logoutUser } from './services/db';
import { User } from './types';
import { MainLayout } from './components/MainLayout';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { ErrorBoundary } from './components/ErrorBoundary';

import { ProtectedRoute } from './components/ProtectedRoute';

// Lazy Load Pages
const Dashboard = lazy(() => import('./pages/Dashboard').then(module => ({ default: module.Dashboard })));
const CourseViewer = lazy(() => import('./pages/CourseViewer').then(module => ({ default: module.CourseViewer })));
const QuizPage = lazy(() => import('./pages/Quiz').then(module => ({ default: module.QuizPage })));
const Profile = lazy(() => import('./pages/Profile').then(module => ({ default: module.Profile })));
const AdminSeed = lazy(() => import('./pages/AdminSeed').then(module => ({ default: module.AdminSeed })));
const AdminAnalytics = lazy(() => import('./pages/AdminAnalytics').then(module => ({ default: module.AdminAnalytics })));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard').then(module => ({ default: module.AdminDashboard })));
const AdminCourseUpload = lazy(() => import('./pages/AdminCourseUpload').then(module => ({ default: module.AdminCourseUpload })));
const AdminQuizUpload = lazy(() => import('./pages/AdminQuizUpload').then(module => ({ default: module.AdminQuizUpload })));
const PlaceholderPage = lazy(() => import('./pages/PlaceholderPage').then(module => ({ default: module.PlaceholderPage })));

const LoadingScreen = () => (
  <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

const AppContent: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // Initial fetch
        const userData = await getUserData(firebaseUser.uid, firebaseUser.email);
        setUser(userData);

        // Subscribe to real-time updates
        const unsubUserData = subscribeToUserData(firebaseUser.uid, (updatedUser) => {
          if (updatedUser) setUser(updatedUser);
        });

        setLoading(false);
        return () => unsubUserData();
      } else {
        setUser(null);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const handleLogout = async () => {
    try {
      await logoutUser();
      setUser(null);
      setSearchQuery('');
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/dashboard" replace />} />
          <Route path="/register" element={!user ? <Register user={user} /> : <Navigate to="/dashboard" replace />} />

          <Route element={user ? (
            <MainLayout
              user={user}
              onLogout={handleLogout}
              darkMode={darkMode}
              toggleTheme={toggleTheme}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
          ) : <Navigate to="/login" replace />}>
            <Route path="/dashboard" element={<Dashboard user={user!} searchQuery={searchQuery} />} />
            <Route path="/profile" element={<Profile user={user!} />} />
            <Route path="/wiki" element={<PlaceholderPage title="Company Wiki" type="wiki" />} />
            <Route path="/directory" element={<PlaceholderPage title="Team Directory" type="directory" />} />
            <Route path="/support" element={<PlaceholderPage title="IT & HR Support" type="support" />} />
            <Route path="/community" element={<PlaceholderPage title="Community" />} />
            <Route path="/messages" element={<PlaceholderPage title="Messages" />} />
            <Route path="/settings" element={<PlaceholderPage title="Settings" />} />
          </Route>

          {/* Standalone Routes */}
          <Route
            path="/course/:courseId"
            element={user ? <CourseViewer user={user} onLogout={handleLogout} /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/course/:courseId/module/:moduleId"
            element={user ? <CourseViewer user={user} onLogout={handleLogout} /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/course/:courseId/quiz/:quizId"
            element={user ? <QuizPage user={user} onLogout={handleLogout} /> : <Navigate to="/login" replace />}
          />

          {/* Admin Routes - Protected */}
          <Route element={<ProtectedRoute user={user} allowedRoles={['admin', 'Admin']} />}>
            <Route element={<MainLayout
              user={user!}
              onLogout={handleLogout}
              darkMode={darkMode}
              toggleTheme={toggleTheme}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />}>
              <Route path="/admin" element={<AdminDashboard user={user!} />} />
              <Route path="/admin/analytics" element={<AdminAnalytics user={user!} />} />
              <Route path="/admin/course-upload" element={<AdminCourseUpload />} />
              <Route path="/admin/quiz-upload" element={<AdminQuizUpload />} />
              <Route path="/admin/seed" element={<AdminSeed user={user!} onLogout={handleLogout} />} />
            </Route>
          </Route>

          <Route path="*" element={<Navigate to={user ? "/dashboard" : "/login"} replace />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
