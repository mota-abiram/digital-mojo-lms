
import React from 'react';
import { MOCK_COURSES } from '../constants';
import { User, Course } from '../types';
import { useNavigate } from 'react-router-dom';

interface DashboardProps {
    user: User;
    searchQuery?: string;
}

const CourseCard: React.FC<{ course: Course; onClick: () => void }> = ({ course, onClick }) => {
    return (
        <div className="group flex flex-col gap-3 rounded-xl border border-border-light bg-card-light dark:border-border-dark dark:bg-card-dark overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
            <div className="relative w-full h-32 overflow-hidden">
                <div
                    className="w-full h-full bg-center bg-no-repeat bg-cover transform group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url("${course.image}")` }}
                ></div>
                {course.dueDate && course.progress < 100 && (
                    <div className="absolute top-2 right-2 bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded-md shadow-sm">
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
                            className={`h-full rounded-full transition-all duration-1000 ease-out ${course.progress === 100 ? 'bg-green-500' : 'bg-primary'}`}
                            style={{ width: `${course.progress}%` }}
                        ></div>
                    </div>
                </div>

                <button
                    onClick={onClick}
                    className="mt-2 w-full rounded-md bg-transparent border border-primary text-primary hover:bg-primary hover:text-white py-2 text-xs font-bold transition-colors"
                >
                    {course.progress === 0 ? 'Start' : 'Continue'}
                </button>
            </div>
        </div>
    );
};

export const Dashboard: React.FC<DashboardProps> = ({ user, searchQuery = '' }) => {
    const navigate = useNavigate();

    const filterCourses = (courses: Course[]) => {
        if (!searchQuery) return courses;
        const lowerQuery = searchQuery.toLowerCase();
        return courses.filter(c =>
            c.title.toLowerCase().includes(lowerQuery) ||
            c.description.toLowerCase().includes(lowerQuery)
        );
    };

    const mandatoryCourses = filterCourses(MOCK_COURSES.filter(c => c.category === 'mandated'));
    const roleCourses = filterCourses(MOCK_COURSES.filter(c => c.category === 'role-specific'));

    const completedMandatory = mandatoryCourses.filter(c => c.progress === 100).length;
    const totalMandatory = mandatoryCourses.length;
    const onboardingProgress = Math.round((completedMandatory / totalMandatory) * 100);

    const handleAction = (actionName: string) => {
        alert(`${actionName} feature initiated. This would typically open a modal or new window.`);
    };

    return (
        <div className="flex flex-col lg:flex-row h-full">
            {/* Main Content */}
            <div className="flex-1 p-6 md:p-8 lg:p-10 flex flex-col gap-8 overflow-y-auto">

                {/* Welcome Banner */}
                <div className="bg-gradient-to-r from-primary/90 to-primary/70 rounded-2xl p-6 md:p-8 text-white shadow-lg relative overflow-hidden">
                    <div className="relative z-10 max-w-2xl">
                        <h1 className="text-3xl font-bold mb-2">Welcome to Digital Mojo, {user.name.split(' ')[0]}!</h1>
                        <p className="text-white/90 text-lg mb-6">We're thrilled to have you on the {user.department} team. Let's get you settled in.</p>

                        <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 w-fit">
                            <div className="relative size-12">
                                <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                                    <path className="text-white/30" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                                    <path className="text-white transition-all duration-1000" strokeDasharray={`${onboardingProgress}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center text-xs font-bold">{onboardingProgress}%</div>
                            </div>
                            <div>
                                <p className="font-bold text-sm">Onboarding Progress</p>
                                <p className="text-xs text-white/80">{completedMandatory} of {totalMandatory} mandatory modules completed</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute right-0 bottom-0 opacity-20 transform translate-x-1/4 translate-y-1/4">
                        <span className="material-symbols-outlined text-[250px]">rocket_launch</span>
                    </div>
                </div>

                {/* Mandatory Training Section */}
                <section>
                    <div className="flex items-center gap-2 mb-4">
                        <span className="material-symbols-outlined text-orange-500">priority_high</span>
                        <h2 className="text-xl font-bold text-text-light-primary dark:text-text-dark-primary">Mandatory Onboarding</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                        {mandatoryCourses.map(course => (
                            <CourseCard key={course.id} course={course} onClick={() => navigate(`/course/${course.id}`)} />
                        ))}
                    </div>
                </section>

                {/* Role Specific Section */}
                <section>
                    <div className="flex items-center gap-2 mb-4">
                        <span className="material-symbols-outlined text-primary">school</span>
                        <h2 className="text-xl font-bold text-text-light-primary dark:text-text-dark-primary">Your Learning Path</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                        {roleCourses.map(course => (
                            <CourseCard key={course.id} course={course} onClick={() => navigate(`/course/${course.id}`)} />
                        ))}
                    </div>
                </section>
            </div>

            {/* Right Sidebar Widgets */}
            <div className="w-full lg:w-80 border-l border-border-light dark:border-border-dark bg-background-light dark:bg-card-dark p-6 flex flex-col gap-8">


                {/* Announcements */}

                {/* Support Contact */}
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined text-sm">support_agent</span>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-text-light-primary dark:text-text-dark-primary">Need Help?</p>
                            <p className="text-xs text-text-light-secondary dark:text-text-dark-secondary">Contact HR Team</p>
                        </div>
                    </div>
                    <p className="text-xs text-text-light-secondary dark:text-text-dark-secondary mb-3">Questions about your onboarding?</p>
                    <button
                        onClick={() => navigate('/support')}
                        className="w-full py-2 bg-card-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-lg text-xs font-bold hover:bg-white transition-colors"
                    >
                        Chat with HR
                    </button>
                </div>

            </div>
        </div>
    );
};
