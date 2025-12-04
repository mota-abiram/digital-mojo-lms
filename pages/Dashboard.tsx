import React, { useState, useEffect } from 'react';
import { User, Course } from '../types';
import { useNavigate, Link } from 'react-router-dom';
import { getCourses } from '../services/db';

interface DashboardProps {
    user: User;
    searchQuery?: string;
}

const CourseCard: React.FC<{ course: Course; user: User }> = ({ course, user }) => {
    const lastAccessedModuleId = user.progress?.[course.id]?.lastAccessedModuleId;
    const linkTo = lastAccessedModuleId
        ? `/course/${course.id}/module/${lastAccessedModuleId}`
        : `/course/${course.id}`;

    return (
        <Link to={linkTo} className="group flex flex-col gap-3 rounded-xl border border-border-light bg-card-light dark:border-border-dark dark:bg-card-dark overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
            <div className="relative w-full h-32 overflow-hidden">
                <div
                    className="w-full h-full bg-center bg-no-repeat bg-cover transform group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url("${course.image}")` }}
                ></div>
                {course.dueDate && course.progress < 100 && (
                    <div className="absolute top-2 right-2 bg-warning/10 text-warning text-xs font-bold px-2 py-1 rounded-md shadow-sm border border-warning/20 backdrop-blur-sm">
                        Due: {course.dueDate}
                    </div>
                )}
            </div>

            <div className="flex flex-col gap-2 p-4 pt-0 flex-1">
                <h3 className="text-base font-bold leading-tight text-text-light-primary dark:text-text-dark-primary group-hover:text-primary transition-colors line-clamp-1" title={course.title}>{course.title}</h3>
                <p className="text-text-light-secondary dark:text-text-dark-secondary text-xs font-normal leading-relaxed line-clamp-2">{course.description}</p>

                <div className="flex flex-col gap-1.5 mt-auto pt-2">
                    <div className="flex justify-between items-center text-xs text-text-light-secondary dark:text-text-dark-secondary">
                        <span>{course.progress === 100 ? 'Completed' : `${course.progress}% Complete`}</span>
                    </div>
                    <div className="w-full bg-background-light dark:bg-background-dark rounded-full h-1.5 overflow-hidden">
                        <div
                            className={`h-full rounded-full transition-all duration-1000 ease-out ${course.progress === 100 ? 'bg-success' : 'bg-primary'}`}
                            style={{ width: `${course.progress}%` }}
                        ></div>
                    </div>
                </div>

                <div
                    className="mt-2 w-full rounded-md bg-transparent border border-primary text-primary group-hover:bg-primary group-hover:text-white py-2 text-xs font-bold transition-colors text-center"
                >
                    {course.progress === 0 ? 'Start' : 'Continue'}
                </div>
            </div>
        </Link>
    );
};

export const Dashboard: React.FC<DashboardProps> = ({ user, searchQuery = '' }) => {
    const navigate = useNavigate();
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const data = await getCourses();
                setCourses(data);
            } catch (error) {
                console.error("Failed to fetch courses", error);
            } finally {
                setLoading(false);
            }
        };
        fetchCourses();
    }, []);

    const getCourseWithProgress = (course: Course) => {
        if (!user.progress || !user.progress[course.id]) {
            return { ...course, progress: 0 };
        }

        // Get all valid module IDs for this course
        const allModuleIds = new Set(course.sections?.flatMap(s => s.modules || []).map(m => m.id) || []);
        const totalModules = allModuleIds.size;

        // Filter completed modules to only include those that currently exist in the course
        const completedModules = (user.progress[course.id].completedModules || []).filter(id => allModuleIds.has(id));

        const progress = totalModules > 0 ? Math.round((completedModules.length / totalModules) * 100) : 0;

        return { ...course, progress };
    };

    const filterCourses = (courses: Course[]) => {
        const coursesWithProgress = courses.map(getCourseWithProgress);

        if (!searchQuery) return coursesWithProgress;
        const lowerQuery = searchQuery.toLowerCase();
        return coursesWithProgress.filter(c =>
            c.title.toLowerCase().includes(lowerQuery) ||
            c.description.toLowerCase().includes(lowerQuery)
        );
    };

    const mandatoryCourses = filterCourses(courses.filter(c => c.category === 'mandated'));
    const roleCourses = filterCourses(courses.filter(c => c.category === 'role-specific'));

    const completedMandatory = mandatoryCourses.filter(c => c.progress === 100).length;
    const totalMandatory = mandatoryCourses.length;
    const onboardingProgress = totalMandatory > 0 ? Math.round((completedMandatory / totalMandatory) * 100) : 0;

    if (loading) {
        return <div className="p-10 text-center">Loading courses...</div>;
    }

    if (courses.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-full p-10 text-center text-text-light-primary dark:text-text-dark-primary">
                <span className="material-symbols-outlined text-6xl text-text-light-secondary mb-4">folder_off</span>
                <h2 className="text-2xl font-bold mb-2">No Courses Available</h2>
                <p className="text-text-light-secondary mb-6 max-w-md">
                    The course catalog appears to be empty. If you're setting up the system, you may need to seed the database.
                </p>
                <Link to="/admin/seed" className="px-6 py-3 bg-primary text-black rounded-lg font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                    Go to Database Migration
                </Link>
            </div>
        );
    }

    return (
        <div className="flex flex-col lg:flex-row h-full">
            {/* Main Content */}
            <div className="flex-1 p-6 md:p-8 lg:p-10 flex flex-col gap-8 overflow-y-auto">

                {/* Welcome Banner */}
                <div className="bg-gradient-to-r from-brand-yellow to-yellow-500 rounded-2xl p-6 md:p-8 text-black shadow-lg relative overflow-hidden">
                    <div className="relative z-10 max-w-2xl">
                        <h1 className="text-3xl font-bold mb-2">Welcome to Digital Mojo, {user?.name ? user.name.split(' ')[0] : 'User'}!</h1>
                        <p className="text-black/80 text-lg mb-6">We're thrilled to have you on the {user?.department || 'Digital Mojo'} team. Let's get you settled in.</p>

                        <div className="flex items-center gap-4 bg-black/5 backdrop-blur-sm p-4 rounded-xl border border-black/10 w-fit">
                            <div className="relative size-12">
                                <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                                    <path className="text-black/10" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                                    <path className="text-black transition-all duration-1000" strokeDasharray={`${onboardingProgress || 0}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center text-xs font-bold">{onboardingProgress || 0}%</div>
                            </div>
                            <div>
                                <p className="font-bold text-sm">Onboarding Progress</p>
                                <p className="text-xs text-black/60">{completedMandatory || 0} of {totalMandatory || 0} mandatory modules completed</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
                        <span className="material-symbols-outlined text-[250px] text-black">rocket_launch</span>
                    </div>
                </div>

                {/* Mandatory Training Section */}
                <section>
                    <div className="flex items-center gap-2 mb-4">
                        <span className="material-symbols-outlined text-orange-500">priority_high</span>
                        <h2 className="text-xl font-bold text-text-light-primary dark:text-text-dark-primary">Mandatory Onboarding</h2>
                    </div>
                    {mandatoryCourses.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                            {mandatoryCourses.map(course => (
                                <CourseCard key={course.id} course={course} user={user} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-text-light-secondary">No mandatory courses found.</p>
                    )}
                </section>

                {/* Role Specific Section */}
                <section>
                    <div className="flex items-center gap-2 mb-4">
                        <span className="material-symbols-outlined text-primary">school</span>
                        <h2 className="text-xl font-bold text-text-light-primary dark:text-text-dark-primary">Your Learning Path</h2>
                    </div>
                    {roleCourses.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                            {roleCourses.map(course => (
                                <CourseCard key={course.id} course={course} user={user} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-text-light-secondary">No role-specific courses found.</p>
                    )}
                </section>
            </div>

            {/* Right Sidebar Widgets */}


            {/* Announcements */}

            {/* Support Contact */}

        </div>

    );
};
