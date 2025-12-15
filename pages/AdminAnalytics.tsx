import React, { useState, useEffect } from 'react';
import { User, Course } from '../types';
import { getCourses, getQuizzesForModules, markCourseComplete } from '../services/db';
import { collection, getDocs, query, limit } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { UserAvatar } from '../components/UserAvatar';

interface AdminAnalyticsProps {
    user: User;
}

export const AdminAnalytics: React.FC<AdminAnalyticsProps> = ({ user }) => {
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [users, setUsers] = useState<User[]>([]);
    const [courses, setCourses] = useState<Course[]>([]);
    const [courseQuizzes, setCourseQuizzes] = useState<{ [key: string]: { title: string, moduleId: string } }>({}); // Map quizId -> {title, moduleId}
    const [moduleNames, setModuleNames] = useState<{ [key: string]: string }>({}); // Map moduleId -> moduleTitle
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

    useEffect(() => {
        const fetchQuizzes = async () => {
            if (selectedCourse) {
                const quizModuleIds = selectedCourse.sections
                    ?.flatMap(s => s.modules || [])
                    .map(m => m.id) || [];

                // Create module name map
                const modMap: { [key: string]: string } = {};
                selectedCourse.sections?.forEach(s => {
                    s.modules?.forEach(m => {
                        modMap[m.id] = m.title;
                    });
                });
                setModuleNames(modMap);

                if (quizModuleIds.length > 0) {
                    const quizzes = await getQuizzesForModules(quizModuleIds);
                    const quizMap: { [key: string]: { title: string, moduleId: string } } = {};
                    quizzes.forEach(q => {
                        quizMap[q.id] = { title: q.title, moduleId: q.moduleId };
                    });
                    setCourseQuizzes(quizMap);
                } else {
                    setCourseQuizzes({});
                }
            }
        };
        fetchQuizzes();
    }, [selectedCourse]);

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

        const targetDepartment = course.id === 'c1' ? 'Social Media' :
            course.id === 'c_perf_spec' ? 'PPC' :
                course.id === 'c3' ? 'Website' :
                    course.id === 'c4' ? 'SEO' : null;

        const relevantUsers = targetDepartment
            ? users.filter(u => u.department === targetDepartment)
            : users;

        relevantUsers.forEach(u => {
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

    const handleMarkComplete = async () => {
        if (!selectedUser || !selectedCourse) return;

        if (window.confirm(`Are you sure you want to mark "${selectedCourse.title}" as 100% complete for ${selectedUser.name}? This will also mark all quizzes as passed.`)) {
            try {
                await markCourseComplete(selectedUser.id, selectedCourse.id);

                // Construct quiz scores for local update to show immediate feedback
                const quizScoresStub: any = {};
                Object.keys(courseQuizzes).forEach(qId => {
                    quizScoresStub[qId] = {
                        score: 100,
                        passed: true,
                        attempts: 1,
                        completedAt: new Date().toISOString(),
                        history: [{ score: 100, passed: true, completedAt: new Date().toISOString() }]
                    };
                });

                // Simple state update to reflect change in UI without full reload
                const updatedUsers = users.map(u => {
                    if (u.id === selectedUser.id) {
                        const newProgress = {
                            ...u.progress, [selectedCourse.id]: {
                                ...u.progress?.[selectedCourse.id],
                                completedModules: selectedCourse.sections?.flatMap(s => s.modules || []).map(m => m.id) || [],
                                quizScores: { ...u.progress?.[selectedCourse.id]?.quizScores, ...quizScoresStub }
                            }
                        };
                        return { ...u, progress: newProgress };
                    }
                    return u;
                });
                setUsers(updatedUsers);

                // Update selected user as well to show completed status immediately
                const updatedSelectedUser = updatedUsers.find(u => u.id === selectedUser.id);
                if (updatedSelectedUser) setSelectedUser(updatedSelectedUser);

                alert('Course marked as complete!');
            } catch (err) {
                console.error(err);
                alert('Failed to mark complete.');
            }
        }
    };

    // --- Detail View Logic ---
    if (selectedCourse) {
        // Get all valid module IDs for the selected course
        const allModuleIds = new Set(selectedCourse.sections?.flatMap(s => s.modules || []).map(m => m.id) || []);
        const totalModules = allModuleIds.size;

        // Get all quiz modules for the selected course (either type='quiz' or has a quiz linked)
        const allQuizModules = selectedCourse.sections?.flatMap(s => s.modules || []).filter(m => {
            return m.type === 'quiz' || Object.values(courseQuizzes).some(q => q.moduleId === m.id);
        }) || [];

        const targetDepartment = selectedCourse.id === 'c1' ? 'Social Media' :
            selectedCourse.id === 'c_perf_spec' ? 'PPC' :
                selectedCourse.id === 'c3' ? 'Website' :
                    selectedCourse.id === 'c4' ? 'SEO' : null;

        const relevantUsers = targetDepartment
            ? users.filter(u => u.department === targetDepartment)
            : users;

        const courseUsers = relevantUsers.map(u => {
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
                lastUpdated: progress?.lastUpdated ? new Date(progress.lastUpdated).toLocaleDateString() : '-',
                joinDate: u.joinDate || '-',
                quizScores: progress?.quizScores || {}
            };
        });

        return (
            <>
                {selectedUser && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
                        <div className="w-full max-w-3xl bg-card-light dark:bg-card-dark rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
                            <div className="p-6 border-b border-border-light dark:border-border-dark flex justify-between items-center bg-background-light dark:bg-background-dark">
                                <div className="flex items-center gap-4">
                                    <UserAvatar user={selectedUser} size="lg" className="!size-12" />
                                    <div>
                                        <h2 className="text-xl font-bold text-text-light-primary dark:text-text-dark-primary">{selectedUser.name}</h2>
                                        <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary">{selectedUser.email}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={handleMarkComplete}
                                        className="px-3 py-1.5 bg-green-100 text-green-700 hover:bg-green-200 rounded-lg text-sm font-bold transition-colors"
                                        title="Mark all modules as completed"
                                    >
                                        Mark as Complete
                                    </button>
                                    <button
                                        onClick={() => setSelectedUser(null)}
                                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                                    >
                                        <span className="material-symbols-outlined">close</span>
                                    </button>
                                </div>
                            </div>
                            <div className="p-6 overflow-y-auto">
                                <h3 className="text-lg font-bold mb-4 text-text-light-primary dark:text-text-dark-primary">
                                    {allQuizModules.length > 0 ? 'Quiz Performance Breakdown' : 'Module Completion Status'}
                                </h3>
                                <div className="space-y-4">
                                    {allQuizModules.length > 0 ? (
                                        allQuizModules.map(module => {
                                            // Find the quiz ID for this module
                                            const quizEntry = Object.entries(courseQuizzes).find(([_, data]) => data.moduleId === module.id);
                                            const quizId = quizEntry ? quizEntry[0] : null;
                                            const scoreData = quizId && selectedUser.progress?.[selectedCourse.id]?.quizScores?.[quizId];

                                            return (
                                                <div key={module.id} className="flex flex-col p-4 bg-background-light dark:bg-background-dark rounded-xl border border-border-light dark:border-border-dark">
                                                    <div className="flex items-center justify-between">
                                                        <div>
                                                            <p className="font-bold text-text-light-primary dark:text-text-dark-primary">{module.title}</p>
                                                            <p className="text-xs text-text-light-secondary dark:text-text-dark-secondary">
                                                                {quizEntry ? quizEntry[1].title : 'Quiz'}
                                                            </p>
                                                        </div>
                                                        <div className="text-right">
                                                            <p className="text-xs text-text-light-secondary dark:text-text-dark-secondary mb-1">Total Attempts</p>
                                                            <span className="font-bold text-text-light-primary dark:text-text-dark-primary">
                                                                {scoreData ? scoreData.attempts : 0}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    {/* History Section */}
                                                    {scoreData && scoreData.history && scoreData.history.length > 0 && (
                                                        <div className="mt-4 pt-3 border-t border-border-light dark:border-border-dark">
                                                            <p className="text-xs font-semibold text-text-light-secondary dark:text-text-dark-secondary mb-2 uppercase tracking-wider">Attempt History</p>
                                                            <div className="space-y-2">
                                                                {scoreData.history.map((attempt, index) => (
                                                                    <div key={index} className="flex items-center justify-between text-sm p-2 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                                                                        <span className="text-text-light-secondary dark:text-text-dark-secondary font-medium">Attempt {index + 1}</span>
                                                                        <div className="flex items-center gap-4">
                                                                            <span className="text-xs text-gray-500">
                                                                                {new Date(attempt.completedAt).toLocaleDateString()} {new Date(attempt.completedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                                            </span>
                                                                            <span className={`font-bold ${attempt.passed ? 'text-green-600' : 'text-red-500'}`}>
                                                                                {attempt.score}%
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}

                                                    {/* Fallback for legacy data (no history) */}
                                                    {scoreData && (!scoreData.history || scoreData.history.length === 0) && (
                                                        <div className="mt-4 pt-3 border-t border-border-light dark:border-border-dark flex justify-between items-center">
                                                            <span className="text-sm text-text-light-secondary dark:text-text-dark-secondary">Best Score</span>
                                                            <span className={`font-bold text-lg ${scoreData.passed ? 'text-green-600' : 'text-red-500'}`}>
                                                                {scoreData.score}%
                                                            </span>
                                                        </div>
                                                    )}

                                                    {!scoreData && (
                                                        <div className="mt-2 text-right">
                                                            <span className="text-sm text-gray-400 italic">Not attempted yet</span>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })
                                    ) : (
                                        <div className="space-y-2">
                                            <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary mb-4">
                                                This course has no quizzes. Showing module completion status:
                                            </p>
                                            {selectedCourse.sections?.flatMap(s => s.modules || []).map(module => {
                                                const isCompleted = selectedUser.progress?.[selectedCourse.id]?.completedModules?.includes(module.id);
                                                return (
                                                    <div key={module.id} className="flex items-center justify-between p-3 bg-background-light dark:bg-background-dark rounded-lg border border-border-light dark:border-border-dark">
                                                        <div className="flex items-center gap-3">
                                                            <span className={`material-symbols-outlined text-lg ${isCompleted ? 'text-green-500' : 'text-gray-400'}`}>
                                                                {isCompleted ? 'check_circle' : 'radio_button_unchecked'}
                                                            </span>
                                                            <span className="text-sm font-medium text-text-light-primary dark:text-text-dark-primary">{module.title}</span>
                                                        </div>
                                                        <span className={`text-xs font-bold ${isCompleted ? 'text-green-600' : 'text-gray-500'}`}>
                                                            {isCompleted ? 'Completed' : 'Pending'}
                                                        </span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div >
                )}
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
                                        <th className="p-4 font-semibold text-center">First Login</th>
                                        <th className="p-4 font-semibold text-center">Status</th>
                                        <th className="p-4 font-semibold text-center">Progress</th>
                                        <th className="p-4 font-semibold text-center">Last Active</th>
                                        <th className="p-4 font-semibold text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border-light dark:divide-border-dark">
                                    {courseUsers.map(u => (
                                        <tr key={u.id} className="hover:bg-background-light dark:hover:bg-background-dark/50 transition-colors">
                                            <td className="p-4">
                                                <div className="flex items-center gap-3">
                                                    <UserAvatar user={u} size="sm" />
                                                    <div>
                                                        <p className="font-bold text-text-light-primary dark:text-text-dark-primary">{u.name}</p>
                                                        <p className="text-xs text-text-light-secondary dark:text-text-dark-secondary">{u.email}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-4 text-text-light-secondary dark:text-text-dark-secondary">{u.department}</td>
                                            <td className="p-4 text-center text-text-light-secondary dark:text-text-dark-secondary text-sm">{u.joinDate}</td>
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
                                            <td className="p-4 text-center">
                                                <button
                                                    onClick={() => setSelectedUser(u)}
                                                    className="px-4 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-lg text-sm font-bold transition-all"
                                                >
                                                    View Details
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
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
