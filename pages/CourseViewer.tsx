
import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, useLocation, Link } from 'react-router-dom';
import { MOCK_COURSES, MOCK_QUIZZES } from '../constants';
import { User } from '../types';
import { Header } from '../components/Header';
import { updateModuleProgress } from '../services/db';

interface CourseViewerProps {
    user: User;
    onLogout: () => void;
}

declare global {
    interface Window {
        onYouTubeIframeAPIReady: () => void;
        YT: any;
    }
}

export const CourseViewer: React.FC<CourseViewerProps> = ({ user, onLogout }) => {
    const { courseId } = useParams();
    const navigate = useNavigate();
    const course = MOCK_COURSES.find(c => c.id === courseId);

    // Default to first module if no specific state, tracking active module ID
    const [activeModuleId, setActiveModuleId] = useState<string | undefined>(undefined);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const playerRef = useRef<any>(null);

    // Flatten all modules for easy navigation
    const allModules = course?.sections.flatMap(section => section.modules) || [];

    const location = useLocation();

    // Initialize activeModuleId when course loads
    useEffect(() => {
        if (course && allModules.length > 0) {
            if (location.state?.activeModuleId) {
                setActiveModuleId(location.state.activeModuleId);
            } else if (!activeModuleId) {
                setActiveModuleId(allModules[0].id);
            }
        }
    }, [course, allModules, location.state]);

    // State to track if we are showing the video or the quiz start card for a quiz module
    const [showQuizStart, setShowQuizStart] = useState(false);

    // Reset quiz view state when module changes
    useEffect(() => {
        setShowQuizStart(false);
    }, [activeModuleId]);

    // Track YouTube API readiness
    const [isYouTubeApiReady, setIsYouTubeApiReady] = useState(false);

    // Load YouTube API
    useEffect(() => {
        if (!window.YT) {
            const tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

            // Define the callback for when the API is ready
            window.onYouTubeIframeAPIReady = () => {
                setIsYouTubeApiReady(true);
            };
        } else {
            setIsYouTubeApiReady(true);
        }
    }, []);

    if (!course) return <div className="p-8 text-center text-text-light-primary dark:text-text-dark-primary">Course not found</div>;

    const activeModuleIndex = allModules.findIndex(m => m.id === activeModuleId);
    const activeModule = allModules[activeModuleIndex];

    // Helper to check if a module is completed based on user data
    const isModuleCompleted = (moduleId: string) => {
        if (location.state?.completedModuleId === moduleId) return true; // Optimistic update
        if (!user.progress || !user.progress[course.id]) return false;
        return user.progress[course.id].completedModules.includes(moduleId);
    };

    const completedModulesCount = allModules.filter(m => isModuleCompleted(m.id)).length;
    const progressPercentage = Math.round((completedModulesCount / allModules.length) * 100);

    const handleModuleComplete = async (moduleId: string) => {
        if (user.id) {
            try {
                await updateModuleProgress(user.id, course.id, moduleId);
            } catch (error) {
                console.error("Failed to save progress", error);
            }
        }
    };

    const handleNext = async () => {
        if (activeModule) {
            await handleModuleComplete(activeModule.id);
        }

        if (activeModuleIndex < allModules.length - 1) {
            setActiveModuleId(allModules[activeModuleIndex + 1].id);
        } else {
            // Course Complete
            if (window.confirm("Congratulations! You've reached the end of this course. Return to Dashboard?")) {
                navigate('/dashboard');
            }
        }
    };

    const handlePrev = () => {
        if (activeModuleIndex > 0) {
            setActiveModuleId(allModules[activeModuleIndex - 1].id);
        }
    };

    // Initialize Player when active module changes or API becomes ready
    useEffect(() => {
        if (activeModule?.type === 'video' && activeModule.videoUrl && isYouTubeApiReady && window.YT) {
            const videoId = activeModule.videoUrl.includes('watch?v=')
                ? activeModule.videoUrl.split('watch?v=')[1].split('&')[0]
                : activeModule.videoUrl.includes('youtu.be/')
                    ? activeModule.videoUrl.split('youtu.be/')[1].split('?')[0]
                    : null;

            if (videoId) {
                // Small delay to ensure container is ready
                setTimeout(() => {
                    // If a player already exists, destroy it first
                    if (playerRef.current) {
                        try {
                            playerRef.current.destroy();
                        } catch (e) {
                            console.warn("Error destroying player", e);
                        }
                    }

                    playerRef.current = new window.YT.Player('youtube-player', {
                        height: '100%',
                        width: '100%',
                        videoId: videoId,
                        playerVars: {
                            'playsinline': 1,
                            'rel': 0
                        },
                        events: {
                            'onStateChange': (event: any) => {
                                if (event.data === window.YT.PlayerState.ENDED) {
                                    // Only mark complete if there is NO quiz for this module
                                    const hasQuiz = Object.values(MOCK_QUIZZES).some(q => q.moduleId === activeModule.id);
                                    if (!hasQuiz) {
                                        handleModuleComplete(activeModule.id);
                                    }
                                }
                            }
                        }
                    });
                }, 100);
            }
        }
        return () => {
            // Cleanup logic if needed, though destroying on unmount can sometimes cause issues with React strict mode
        };
    }, [activeModule, isYouTubeApiReady]);


    return (
        <div className="flex flex-col h-screen bg-background-light dark:bg-background-dark overflow-hidden">
            {/* Simplified Header for Course Mode */}
            <Header user={user} onLogout={onLogout} showSearch={false} />

            <div className="flex flex-1 overflow-hidden relative">
                {/* Course Sidebar */}
                <aside className={`absolute md:relative z-10 h-full w-80 bg-card-light dark:bg-card-dark border-r border-border-light dark:border-border-dark flex flex-col transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0 md:w-0 md:border-none overflow-hidden'}`}>
                    <div className="p-4 border-b border-border-light dark:border-border-dark flex flex-col gap-3">
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="text-sm font-semibold text-text-light-primary dark:text-text-dark-primary uppercase tracking-wider">Course Content</h2>
                                <p className="text-xs text-text-light-secondary dark:text-text-dark-secondary mt-1">{completedModulesCount}/{allModules.length} Completed</p>
                            </div>
                            <button onClick={() => setSidebarOpen(false)} className="md:hidden text-text-light-secondary">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        {/* Progress Bar */}
                        <div className="w-full bg-background-light dark:bg-background-dark rounded-full h-2 overflow-hidden">
                            <div
                                className="h-full bg-green-500 transition-all duration-500 ease-out"
                                style={{ width: `${progressPercentage}%` }}
                            ></div>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-2 space-y-4">
                        {course.sections.map((section) => (
                            <div key={section.id} className="flex flex-col gap-1">
                                <h3 className="px-3 text-xs font-bold text-text-light-secondary dark:text-text-dark-secondary uppercase tracking-wider mb-1">
                                    {section.title}
                                </h3>
                                {
                                    section.modules.map((module, index) => {
                                        const isCompleted = isModuleCompleted(module.id);

                                        // Check if previous module is completed to determine lock state
                                        // Find index of this module in allModules
                                        const moduleGlobalIndex = allModules.findIndex(m => m.id === module.id);
                                        const prevModule = moduleGlobalIndex > 0 ? allModules[moduleGlobalIndex - 1] : null;
                                        const isLocked = prevModule ? !isModuleCompleted(prevModule.id) : false;

                                        return (
                                            <div
                                                key={module.id}
                                                onClick={() => !isLocked && setActiveModuleId(module.id)}
                                                className={`mx-2 p-3 rounded-lg flex items-start gap-3 transition-colors ${isLocked
                                                    ? 'opacity-50 cursor-not-allowed bg-gray-100 dark:bg-gray-800'
                                                    : activeModuleId === module.id
                                                        ? 'bg-primary/10 border border-primary/20 cursor-pointer'
                                                        : 'hover:bg-background-light dark:hover:bg-background-dark cursor-pointer'
                                                    }`}
                                            >
                                                <div className={`mt-0.5 rounded-full p-0.5 ${isCompleted ? 'text-green-500' : activeModuleId === module.id ? 'text-primary' : 'text-text-light-secondary dark:text-text-dark-secondary'}`}>
                                                    <span className="material-symbols-outlined text-[20px]">
                                                        {isCompleted ? 'check_circle' : isLocked ? 'lock' : module.type === 'quiz' ? 'quiz' : 'play_circle'}
                                                    </span>
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className={`text-sm font-medium ${activeModuleId === module.id ? 'text-primary' : 'text-text-light-primary dark:text-text-dark-primary'}`}>
                                                        {module.title}
                                                    </h4>
                                                    <p className="text-xs text-text-light-secondary dark:text-text-dark-secondary mt-1">{module.duration} • {module.type}</p>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        ))}
                    </div>
                </aside>

                {/* Toggle Sidebar Button (Visible when closed on desktop) */}
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className={`absolute top-4 left-4 z-20 p-2 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-md shadow-md text-text-light-secondary dark:text-text-dark-secondary hover:text-primary transition-all ${sidebarOpen ? 'hidden' : 'block'}`}
                >
                    <span className="material-symbols-outlined">menu</span>
                </button>

                {/* Main Content Area */}
                <main className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-6 md:p-10 w-full">
                    {activeModule && (
                        <div className="max-w-4xl mx-auto flex flex-col gap-6">
                            {/* Breadcrumbs */}
                            <div className="flex items-center gap-2 text-sm text-text-light-secondary dark:text-text-dark-secondary">
                                <Link to="/dashboard" className="cursor-pointer hover:underline hover:text-primary">My Courses</Link>
                                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                                <span className="truncate max-w-[150px]">{course.title}</span>
                                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                                <span className="font-medium text-text-light-primary dark:text-text-dark-primary">{activeModule.title}</span>
                            </div>

                            <h1 className="text-2xl md:text-3xl font-bold text-text-light-primary dark:text-text-dark-primary">{activeModule.title}</h1>

                            {/* Content Player */}
                            <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-border-light dark:border-border-dark relative group">
                                {(() => {
                                    // Find if there is a quiz for this module
                                    const linkedQuizId = Object.keys(MOCK_QUIZZES).find(id => MOCK_QUIZZES[id].moduleId === activeModule.id);
                                    const hasQuiz = !!linkedQuizId;

                                    if (activeModule.type === 'video' || activeModule.type === 'quiz') {
                                        if (!showQuizStart) {
                                            return (
                                                <div className="relative w-full h-full">
                                                    <div id="youtube-player" className="w-full h-full"></div>
                                                </div>
                                            );
                                        } else if (hasQuiz) {
                                            return (
                                                <div className="w-full h-full flex flex-col items-center justify-center bg-card-light dark:bg-card-dark text-center p-8 animate-fade-in">
                                                    <button
                                                        onClick={() => setShowQuizStart(false)}
                                                        className="absolute top-4 left-4 text-text-light-secondary hover:text-primary flex items-center gap-1"
                                                    >
                                                        <span className="material-symbols-outlined">arrow_back</span>
                                                        Back to Video
                                                    </button>
                                                    <span className="material-symbols-outlined text-6xl text-primary mb-4">quiz</span>
                                                    <h2 className="text-2xl font-bold mb-2 text-text-light-primary dark:text-text-dark-primary">Module Assessment</h2>
                                                    <p className="text-text-light-secondary dark:text-text-dark-secondary mb-6 max-w-md">
                                                        Test your knowledge of {activeModule.title}.
                                                    </p>
                                                    <button
                                                        onClick={() => navigate(`/course/${courseId}/quiz/${linkedQuizId}`)}
                                                        className="px-6 py-3 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 transition-transform hover:scale-105"
                                                    >
                                                        Start Quiz
                                                    </button>
                                                </div>
                                            );
                                        }
                                    }

                                    // Fallback for reading or if no quiz logic matches (shouldn't happen for video/quiz types with current logic)
                                    return (
                                        <div className="w-full h-full flex flex-col items-center justify-center bg-card-light dark:bg-card-dark p-8">
                                            <span className="material-symbols-outlined text-6xl text-text-light-secondary mb-4">menu_book</span>
                                            <h2 className="text-2xl font-bold mb-2 text-text-light-primary dark:text-text-dark-primary">Reading Assignment</h2>
                                            <p className="text-lg text-text-light-secondary text-center max-w-lg">
                                                Please refer to the attached document for this module's reading material.
                                            </p>
                                        </div>
                                    );
                                })()}
                            </div>

                            {/* Module Description */}
                            <div className="prose dark:prose-invert max-w-none bg-card-light dark:bg-card-dark p-6 rounded-xl border border-border-light dark:border-border-dark shadow-sm">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="material-symbols-outlined text-primary">info</span>
                                    <h3 className="text-xl font-bold text-text-light-primary dark:text-text-dark-primary m-0">Module Overview</h3>
                                </div>
                                <p className="text-text-light-secondary dark:text-text-dark-secondary leading-relaxed whitespace-pre-line">
                                    {activeModule.description || "Welcome to this module. Here we will explore fundamental principles. Please complete all materials before proceeding."}
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex justify-between items-center pt-4">
                                <button
                                    onClick={handlePrev}
                                    disabled={activeModuleIndex === 0}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold border border-border-light dark:border-border-dark text-text-light-secondary dark:text-text-dark-secondary transition-colors ${activeModuleIndex === 0
                                        ? 'opacity-50 cursor-not-allowed'
                                        : 'hover:bg-background-light dark:hover:bg-background-dark/50'
                                        }`}
                                >
                                    <span className="material-symbols-outlined">arrow_back</span>
                                    Previous
                                </button>
                                <button
                                    onClick={() => {
                                        const linkedQuizId = Object.keys(MOCK_QUIZZES).find(id => MOCK_QUIZZES[id].moduleId === activeModule.id);

                                        if (linkedQuizId) {
                                            navigate(`/course/${courseId}/quiz/${linkedQuizId}`);
                                        } else {
                                            handleNext();
                                        }
                                    }}
                                    className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/20"
                                >
                                    {(() => {
                                        const linkedQuizId = Object.keys(MOCK_QUIZZES).find(id => MOCK_QUIZZES[id].moduleId === activeModule.id);
                                        const isCompleted = isModuleCompleted(activeModule.id);

                                        if (linkedQuizId) {
                                            return isCompleted ? 'View Quiz Results' : 'Take Quiz';
                                        }
                                        if (isCompleted) {
                                            return 'Next Module';
                                        }
                                        return activeModuleIndex === allModules.length - 1 ? 'Finish Course' : 'Mark as Complete & Next';
                                    })()}
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                    )}
                </main>
            </div >
        </div >
    );
};
