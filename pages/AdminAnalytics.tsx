import React, { useState, useEffect } from 'react';
import { User, Course } from '../types';
import { getCourses } from '../services/db';
import { collection, getDocs, query, limit } from 'firebase/firestore';
import { db } from '../firebaseConfig';

interface AdminAnalyticsProps {
    user: User;
}

export const AdminAnalytics: React.FC<AdminAnalyticsProps> = ({ user }) => {
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
    const [users, setUsers] = useState<User[]>([]);
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // 1. Fetch Courses
                const coursesData = await getCourses();
                setCourses(coursesData);

                // 2. Fetch Users (Limit to 100 for performance on Spark plan)
                // In a real app, you'd paginate this.
                const usersRef = collection(db, 'users');
                const q = query(usersRef, limit(100));
                const snapshot = await getDocs(q);
                const usersData = snapshot.docs.map(doc => doc.data() as User);
                const filteredUsers = usersData.filter(u => u.role !== 'admin' && u.role !== 'Admin');
                setUsers(filteredUsers);

            } catch (error) {
                console.error("Error fetching analytics data", error);
            } finally {
                setLoading(false);
            }
        };

        if (user.role === 'admin' || user.role === 'Admin' || user.role === 'Manager') {
            fetchData();
        } else {
            setLoading(false);
        }
    }, [user.role]);

    if (user.role !== 'admin' && user.role !== 'Admin' && user.role !== 'Manager') {
        return <div className="p-10 text-center">Access Denied. Admin privileges required.</div>;
    }

    if (loading) return <div className="p-10 text-center">Loading analytics...</div>;

    // --- Calculations ---

    const totalUsers = users.length;
    const totalCourses = courses.length;

    // Calculate overall completion rates
    const courseStats = courses.map(course => {
        let completedCount = 0;
        let inProgressCount = 0;
        let notStartedCount = 0;

        // Get all valid module IDs for this course
        const allModuleIds = new Set(course.sections?.flatMap(s => s.modules || []).map(m => m.id) || []);
        const totalModules = allModuleIds.size;

        users.forEach(u => {
            const progress = u.progress?.[course.id];
            if (!progress) {
                notStartedCount++;
            } else {
                // Filter completed modules to only include those that currently exist in the course
                const validCompletedModules = (progress.completedModules || []).filter(id => allModuleIds.has(id));
                const completed = validCompletedModules.length;

                if (completed >= totalModules && totalModules > 0) {
                    completedCount++;
                } else if (completed > 0) {
                    inProgressCount++;
                } else {
                    notStartedCount++;
                }
            }
        });

        return {
            ...course,
            completedCount,
            inProgressCount,
            notStartedCount
        };
    });

    // --- Detail View Logic ---
    if (selectedCourse) {
        // Get all valid module IDs for the selected course
        const allModuleIds = new Set(selectedCourse.sections?.flatMap(s => s.modules || []).map(m => m.id) || []);
        const totalModules = allModuleIds.size;

        const courseUsers = users.map(u => {
            const progress = u.progress?.[selectedCourse.id];

            // Filter completed modules to only include those that currently exist in the course
            const validCompletedModules = (progress?.completedModules || []).filter(id => allModuleIds.has(id));
            const completedModulesCount = validCompletedModules.length;

            const percentage = totalModules > 0 ? Math.round((completedModulesCount / totalModules) * 100) : 0;

            let status = 'Not Started';
            if (percentage === 100) status = 'Completed';
            else if (percentage > 0) status = 'In Progress';

            return {
                ...u,
                percentage,
                status,
                lastUpdated: progress?.lastUpdated ? new Date(progress.lastUpdated).toLocaleDateString() : '-'
            };
        });

        return (
            <div className="p-6 md:p-10 bg-background-light dark:bg-background-dark min-h-screen">
                <button
                    onClick={() => setSelectedCourse(null)}
                    className="mb-6 flex items-center gap-2 text-text-light-secondary dark:text-text-dark-secondary hover:text-primary transition-colors"
                >
                    <span className="material-symbols-outlined">arrow_back</span>
                    Back to Overview
                </button>

                <h1 className="text-3xl font-bold mb-2 text-text-light-primary dark:text-text-dark-primary">{selectedCourse.title}</h1>
                <p className="text-text-light-secondary dark:text-text-dark-secondary mb-8">User Progress Report</p>

                <div className="bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-background-light dark:bg-background-dark text-text-light-secondary dark:text-text-dark-secondary text-xs uppercase tracking-wider">
                                    <th className="p-4 font-semibold">User Name</th>
                                    <th className="p-4 font-semibold">Department</th>
                                    <th className="p-4 font-semibold text-center">Status</th>
                                    <th className="p-4 font-semibold text-center">Progress</th>
                                    <th className="p-4 font-semibold text-center">Last Active</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border-light dark:divide-border-dark">
                                {courseUsers.map(u => (
                                    <tr key={u.id} className="hover:bg-background-light dark:hover:bg-background-dark/50 transition-colors">
                                        <td className="p-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-gray-200 bg-cover" style={{ backgroundImage: `url("${u.avatar}")` }}></div>
                                                <div>
                                                    <p className="font-bold text-text-light-primary dark:text-text-dark-primary">{u.name}</p>
                                                    <p className="text-xs text-text-light-secondary dark:text-text-dark-secondary">{u.email}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4 text-text-light-secondary dark:text-text-dark-secondary">{u.department}</td>
                                        <td className="p-4 text-center">
                                            <span className={`px-2 py-1 rounded-full text-xs font-bold ${u.status === 'Completed' ? 'bg-green-100 text-green-700' :
                                                u.status === 'In Progress' ? 'bg-yellow-100 text-yellow-700' :
                                                    'bg-gray-100 text-gray-600'
                                                }`}>
                                                {u.status}
                                            </span>
                                        </td>
                                        <td className="p-4 text-center">
                                            <div className="flex items-center justify-center gap-2">
                                                <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                                                    <div className={`h-full ${u.percentage === 100 ? 'bg-green-500' : 'bg-primary'}`} style={{ width: `${u.percentage}%` }}></div>
                                                </div>
                                                <span className="text-xs font-bold">{u.percentage}%</span>
                                            </div>
                                        </td>
                                        <td className="p-4 text-center text-sm text-text-light-secondary dark:text-text-dark-secondary">{u.lastUpdated}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="p-6 md:p-10 bg-background-light dark:bg-background-dark min-h-screen">
            <h1 className="text-3xl font-bold mb-8 text-text-light-primary dark:text-text-dark-primary">Admin Analytics</h1>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-card-light dark:bg-card-dark p-6 rounded-xl border border-border-light dark:border-border-dark shadow-sm">
                    <h3 className="text-text-light-secondary dark:text-text-dark-secondary text-sm font-bold uppercase tracking-wider mb-2">Total Users</h3>
                    <p className="text-4xl font-bold text-primary">{totalUsers}</p>
                </div>
                <div className="bg-card-light dark:bg-card-dark p-6 rounded-xl border border-border-light dark:border-border-dark shadow-sm">
                    <h3 className="text-text-light-secondary dark:text-text-dark-secondary text-sm font-bold uppercase tracking-wider mb-2">Active Courses</h3>
                    <p className="text-4xl font-bold text-green-600">{totalCourses}</p>
                </div>
                <div className="bg-card-light dark:bg-card-dark p-6 rounded-xl border border-border-light dark:border-border-dark shadow-sm">
                    <h3 className="text-text-light-secondary dark:text-text-dark-secondary text-sm font-bold uppercase tracking-wider mb-2">Total Completions</h3>
                    <p className="text-4xl font-bold text-primary">
                        {courseStats.reduce((acc, curr) => acc + curr.completedCount, 0)}
                    </p>
                </div>
            </div>

            {/* Course Performance Table */}
            <div className="bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm overflow-hidden">
                <div className="p-6 border-b border-border-light dark:border-border-dark">
                    <h2 className="text-xl font-bold text-text-light-primary dark:text-text-dark-primary">Course Performance</h2>
                    <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary mt-1">Click on a course to view detailed user progress.</p>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-background-light dark:bg-background-dark text-text-light-secondary dark:text-text-dark-secondary text-xs uppercase tracking-wider">
                                <th className="p-4 font-semibold">Course Title</th>
                                <th className="p-4 font-semibold text-center">Not Started</th>
                                <th className="p-4 font-semibold text-center">In Progress</th>
                                <th className="p-4 font-semibold text-center">Completed</th>
                                <th className="p-4 font-semibold text-center">Completion Rate</th>
                                <th className="p-4 font-semibold text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border-light dark:divide-border-dark">
                            {courseStats.map(stat => {
                                const total = stat.completedCount + stat.inProgressCount + stat.notStartedCount;
                                const rate = total > 0 ? Math.round((stat.completedCount / total) * 100) : 0;
                                return (
                                    <tr
                                        key={stat.id}
                                        onClick={() => setSelectedCourse(stat)}
                                        className="hover:bg-background-light dark:hover:bg-background-dark/50 transition-colors cursor-pointer group"
                                    >
                                        <td className="p-4 font-medium text-text-light-primary dark:text-text-dark-primary group-hover:text-primary transition-colors">{stat.title}</td>
                                        <td className="p-4 text-center text-gray-500">{stat.notStartedCount}</td>
                                        <td className="p-4 text-center text-yellow-600 font-medium">{stat.inProgressCount}</td>
                                        <td className="p-4 text-center text-green-600 font-bold">{stat.completedCount}</td>
                                        <td className="p-4 text-center">
                                            <div className="flex items-center justify-center gap-2">
                                                <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                                                    <div className="h-full bg-primary" style={{ width: `${rate}%` }}></div>
                                                </div>
                                                <span className="text-xs font-bold">{rate}%</span>
                                            </div>
                                        </td>
                                        <td className="p-4 text-center">
                                            <span className="material-symbols-outlined text-gray-400 group-hover:text-primary">chevron_right</span>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
