
import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, useLocation, Link } from 'react-router-dom';
import { User, Course } from '../types';
import { Header } from '../components/Header';
import { updateModuleProgress, getCourse, getQuizByModuleId } from '../services/db';
// import { CertificateGenerator } from '../components/CertificateGenerator'; // Removed static import

const CertificateGenerator = React.lazy(() => import('../components/CertificateGenerator').then(module => ({ default: module.CertificateGenerator })));

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
    const { courseId, moduleId } = useParams(); // Read moduleId from URL
    const navigate = useNavigate();
    const [course, setCourse] = useState<Course | null>(null);
    const [loading, setLoading] = useState(true);

    // activeModuleId is now derived primarily from the URL, fallback to state or first module
    const [activeModuleId, setActiveModuleId] = useState<string | undefined>(undefined);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const playerRef = useRef<any>(null);

    // Track if the current module has a linked quiz
    const [linkedQuizId, setLinkedQuizId] = useState<string | null>(null);
    const [showCertificate, setShowCertificate] = useState(false);

    const location = useLocation();

    // Fetch Course
    useEffect(() => {
        const fetchCourse = async () => {
            if (courseId) {
                const data = await getCourse(courseId);
                setCourse(data);
                setLoading(false);
            }
        };
        fetchCourse();
    }, [courseId]);

    // Flatten all modules for easy navigation
    const allModules = course?.sections?.flatMap(section => section.modules) || [];

    // Sync activeModuleId with URL or defaults
    useEffect(() => {
        if (course && allModules.length > 0) {
            if (moduleId) {
                setActiveModuleId(moduleId);
            } else if (location.state?.activeModuleId) {
                // Fallback for legacy navigation (e.g. from Quiz)
                // Ideally we should redirect to the URL structure
                navigate(`/course/${courseId}/module/${location.state.activeModuleId}`, { replace: true });
            } else if (!activeModuleId) {
                // Default to first module if nothing specified
                // Redirect to the URL structure
                navigate(`/course/${courseId}/module/${allModules[0].id}`, { replace: true });
            }
        }
    }, [course, moduleId, location.state, navigate, courseId]);

    // Check for linked quiz when active module changes
    useEffect(() => {
        const checkQuiz = async () => {
            if (activeModuleId) {
                const quiz = await getQuizByModuleId(activeModuleId);
                setLinkedQuizId(quiz ? quiz.id : null);
            }
        };
        checkQuiz();
    }, [activeModuleId]);

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



    // Calculate active module early for hooks
    const activeModuleIndex = allModules.findIndex(m => m.id === activeModuleId);
    const activeModule = allModules[activeModuleIndex];

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

                    // Only initialize if the element exists (it might not if we returned early)
                    if (!document.getElementById('youtube-player')) return;

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
                                    if (!linkedQuizId) {
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
            // Cleanup logic if needed
        };
    }, [activeModule, isYouTubeApiReady, linkedQuizId]);


    const handleRepair = async () => {
        if (window.confirm("This will attempt to repair the database by re-uploading default course data. Continue?")) {
            setLoading(true);
            try {
                const { seedDatabase } = await import('../services/seed');
                await seedDatabase();
                window.location.reload();
            } catch (error) {
                console.error("Repair failed", error);
                alert("Repair failed. Please check console for details.");
                setLoading(false);
            }
        }
    };

    if (loading) return <div className="p-8 text-center text-text-light-primary dark:text-text-dark-primary">Loading course...</div>;

    // Debug logging
    console.log("CourseViewer Render:", { course, loading, activeModuleId });

    // Check for data corruption (e.g. missing sections)
    const isCorrupt = course && (!course.sections || !Array.isArray(course.sections));

    if (isCorrupt) return (
        <div className="flex flex-col items-center justify-center h-screen p-8 text-center text-text-light-primary dark:text-text-dark-primary">
            <span className="material-symbols-outlined text-6xl text-red-500 mb-4">warning</span>
            <h2 className="text-2xl font-bold mb-2">Data Corruption Detected</h2>
            <p className="text-text-light-secondary mb-6 max-w-md">
                The data for this course appears to be invalid (missing sections). This usually happens if the database migration was incorrect.
            </p>
            <div className="flex gap-4">
                <Link to="/dashboard" className="px-6 py-2 border border-border-light dark:border-border-dark rounded-lg hover:bg-background-light dark:hover:bg-background-dark/50 transition-colors">
                    Back to Dashboard
                </Link>
                <button
                    onClick={handleRepair}
                    className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors shadow-lg shadow-red-500/20"
                >
                    Repair Database Now
                </button>
            </div>
        </div>
    );

    if (!course) return (
        <div className="flex flex-col items-center justify-center h-screen p-8 text-center text-text-light-primary dark:text-text-dark-primary">
            <span className="material-symbols-outlined text-6xl text-text-light-secondary mb-4">error_outline</span>
            <h2 className="text-2xl font-bold mb-2">Course Not Found</h2>
            <p className="text-text-light-secondary mb-6 max-w-md">
                We couldn't find the course you're looking for. This might be due to missing database data.
            </p>
            <div className="flex gap-4">
                <Link to="/dashboard" className="px-6 py-2 border border-border-light dark:border-border-dark rounded-lg hover:bg-background-light dark:hover:bg-background-dark/50 transition-colors">
                    Back to Dashboard
                </Link>
                <Link to="/admin/seed" className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                    Check Database Migration
                </Link>
            </div>
        </div>
    );



    // Helper to check if a module is completed based on user data
    const isModuleCompleted = (moduleId: string) => {
        if (location.state?.completedModuleId === moduleId) return true; // Optimistic update
        if (!user.progress || !user.progress[course.id]) return false;
        return user.progress[course.id].completedModules.includes(moduleId);
    };

    const completedModulesCount = allModules.filter(m => isModuleCompleted(m.id)).length;
    const progressPercentage = allModules.length > 0 ? Math.round((completedModulesCount / allModules.length) * 100) : 0;

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
            const nextModuleId = allModules[activeModuleIndex + 1].id;
            navigate(`/course/${courseId}/module/${nextModuleId}`);
        } else {
            // Course Complete
            if (window.confirm("Congratulations! You've reached the end of this course. Return to Dashboard?")) {
                navigate('/dashboard');
            }
        }
    };

    const handlePrev = () => {
        if (activeModuleIndex > 0) {
            const prevModuleId = allModules[activeModuleIndex - 1].id;
            navigate(`/course/${courseId}/module/${prevModuleId}`);
        }
    };




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
                        {course.sections?.map((section) => (
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
                                                onClick={() => {
                                                    if (!isLocked) {
                                                        navigate(`/course/${courseId}/module/${module.id}`);
                                                        setShowQuizStart(false); // Reset to video view if re-clicking or changing
                                                    }
                                                }}
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
                    {activeModule ? (
                        <div className="max-w-4xl mx-auto flex flex-col gap-6">
                            {/* Breadcrumbs */}
                            <div className="flex items-center gap-2 text-sm text-text-light-secondary dark:text-text-dark-secondary">
                                <Link to="/dashboard" className="cursor-pointer hover:underline hover:text-primary">My Courses</Link>
                                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                                <span className="truncate max-w-[150px]">{course.title}</span>
                                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                                <span className="font-medium text-text-light-primary dark:text-text-dark-primary">{activeModule?.title || 'Loading Module...'}</span>
                            </div>

                            {/* Certificate Banner */}
                            {progressPercentage === 100 && (
                                <div className="bg-gradient-to-r from-yellow-100 to-yellow-50 border border-yellow-200 rounded-xl p-6 flex items-center justify-between shadow-sm animate-fade-in">
                                    <div className="flex items-center gap-4">
                                        <div className="size-12 rounded-full bg-yellow-500 text-white flex items-center justify-center shadow-md">
                                            <span className="material-symbols-outlined text-2xl">emoji_events</span>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-yellow-900">Course Completed!</h3>
                                            <p className="text-yellow-700 text-sm">You have successfully finished this course.</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setShowCertificate(true)}
                                        className="px-6 py-2 bg-yellow-600 text-white rounded-lg font-bold hover:bg-yellow-700 shadow-md transition-transform hover:scale-105 flex items-center gap-2"
                                    >
                                        <span className="material-symbols-outlined">workspace_premium</span>
                                        Get Certificate
                                    </button>
                                </div>
                            )}

                            <h1 className="text-2xl md:text-3xl font-bold text-text-light-primary dark:text-text-dark-primary">{activeModule?.title || 'Loading...'}</h1>

                            {/* Content Player */}
                            <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-border-light dark:border-border-dark relative group">
                                {(() => {
                                    const hasQuiz = !!linkedQuizId;
                                    const isPureQuiz = activeModule.type === 'quiz' && !activeModule.videoUrl;

                                    if (activeModule.type === 'video' || activeModule.type === 'quiz') {
                                        if (!showQuizStart && !isPureQuiz) {
                                            return (
                                                <div className="relative w-full h-full">
                                                    <div id="youtube-player" className="w-full h-full"></div>
                                                </div>
                                            );
                                        } else if (hasQuiz || isPureQuiz) {
                                            return (
                                                <div className="w-full h-full flex flex-col items-center justify-center bg-card-light dark:bg-card-dark text-center p-8 animate-fade-in">
                                                    {!isPureQuiz && (
                                                        <button
                                                            onClick={() => setShowQuizStart(false)}
                                                            className="absolute top-4 left-4 text-text-light-secondary hover:text-primary flex items-center gap-1"
                                                        >
                                                            <span className="material-symbols-outlined">arrow_back</span>
                                                            Back to Video
                                                        </button>
                                                    )}
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
                                <div className="flex gap-3">
                                    {isModuleCompleted(activeModule.id) && linkedQuizId && (
                                        <button
                                            onClick={() => navigate(`/course/${courseId}/quiz/${linkedQuizId}`)}
                                            className="px-4 py-3 rounded-lg text-sm font-semibold border border-primary text-primary hover:bg-primary/5 transition-colors"
                                        >
                                            View Quiz Results
                                        </button>
                                    )}
                                    <button
                                        onClick={() => {
                                            if (linkedQuizId && !isModuleCompleted(activeModule.id)) {
                                                navigate(`/course/${courseId}/quiz/${linkedQuizId}`);
                                            } else {
                                                handleNext();
                                            }
                                        }}
                                        className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/20"
                                    >
                                        {(() => {
                                            const isCompleted = isModuleCompleted(activeModule.id);

                                            if (linkedQuizId && !isCompleted) {
                                                return 'Take Quiz';
                                            }
                                            if (isCompleted) {
                                                return activeModuleIndex === allModules.length - 1 ? 'Finish Course' : 'Next Module';
                                            }
                                            return activeModuleIndex === allModules.length - 1 ? 'Finish Course' : 'Mark as Complete & Next';
                                        })()}
                                        <span className="material-symbols-outlined">arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="flex items-center justify-center h-full text-text-light-secondary dark:text-text-dark-secondary">
                            Select a module to start learning.
                        </div>
                    )}
                </main>

                {showCertificate && course && (
                    <React.Suspense fallback={<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 text-white">Loading Certificate Generator...</div>}>
                        <CertificateGenerator
                            user={user}
                            course={course}
                            onClose={() => setShowCertificate(false)}
                        />
                    </React.Suspense>
                )}
            </div>
        </div>
    );
};
