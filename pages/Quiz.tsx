import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { User, Quiz } from '../types';
import { getQuiz } from '../services/db';

interface QuizPageProps {
    user: User;
    onLogout: () => void;
}

export const QuizPage: React.FC<QuizPageProps> = ({ user, onLogout }) => {
    const { courseId, quizId } = useParams();
    const navigate = useNavigate();
    const [quiz, setQuiz] = useState<Quiz | null>(null);
    const [loading, setLoading] = useState(true);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<{ [key: string]: number }>({});
    const [quizSubmitted, setQuizSubmitted] = useState(false);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(0); // in seconds

    const [moduleDuration, setModuleDuration] = useState<string | null>(null);

    // Fetch Quiz and Course
    useEffect(() => {
        const fetchData = async () => {
            if (quizId && courseId) {
                const { getCourse, getQuiz } = await import('../services/db');
                const quizData = await getQuiz(quizId);
                setQuiz(quizData);

                if (quizData) {
                    const courseData = await getCourse(courseId);
                    if (courseData) {
                        const module = courseData.sections
                            .flatMap(s => s.modules)
                            .find(m => m.id === quizData.moduleId);

                        if (module) {
                            setModuleDuration(module.duration);
                        }
                    }
                }
                setLoading(false);
            }
        };
        fetchData();
    }, [quizId, courseId]);

    // Check for existing progress
    useEffect(() => {
        if (quiz && user.progress && user.progress[courseId || '']) {
            const courseProgress = user.progress[courseId || ''];
            const quizResult = courseProgress.quizScores?.[quiz.id];

            if (quizResult && quizResult.passed) {
                setQuizSubmitted(true);
                setScore(quizResult.score);
            } else if ((courseProgress.completedModules || []).includes(quiz.moduleId)) {
                // Fallback for legacy completion without score
                setQuizSubmitted(true);
                setScore(100);
            }
        }
    }, [quiz, user.progress, courseId]);

    // Initialize Timer with LocalStorage
    useEffect(() => {
        if (quiz && !quizSubmitted) {
            const STORAGE_KEY = `quiz_start_${quiz.id}_${user.id}`;
            let startTime = localStorage.getItem(STORAGE_KEY);

            if (!startTime) {
                startTime = Date.now().toString();
                localStorage.setItem(STORAGE_KEY, startTime);
            }

            let durationSeconds = 0;
            if (moduleDuration) {
                // Parse "14 min" -> 14 * 60
                const minutes = parseInt(moduleDuration);
                durationSeconds = (isNaN(minutes) ? 15 : minutes) * 60;
            } else {
                const [minutes, seconds] = quiz.timeLimit.split(':').map(Number);
                durationSeconds = minutes * 60 + seconds;
            }

            const elapsed = Math.floor((Date.now() - parseInt(startTime)) / 1000);
            const remaining = Math.max(0, durationSeconds - elapsed);

            setTimeLeft(remaining);
        }
    }, [quiz, quizSubmitted, user.id, moduleDuration]);

    // Timer Logic
    useEffect(() => {
        if (quizSubmitted || !quiz) return;

        const timer = setInterval(() => {
            const STORAGE_KEY = `quiz_start_${quiz.id}_${user.id}`;
            const startTime = localStorage.getItem(STORAGE_KEY);

            if (startTime) {
                let durationSeconds = 0;
                if (moduleDuration) {
                    const minutes = parseInt(moduleDuration);
                    durationSeconds = (isNaN(minutes) ? 15 : minutes) * 60;
                } else {
                    const [minutes, seconds] = quiz.timeLimit.split(':').map(Number);
                    durationSeconds = minutes * 60 + seconds;
                }

                const elapsed = Math.floor((Date.now() - parseInt(startTime)) / 1000);
                const remaining = Math.max(0, durationSeconds - elapsed);

                setTimeLeft(remaining);

                if (remaining <= 0) {
                    clearInterval(timer);
                    handleSubmit();
                }
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [quiz, quizSubmitted, user.id, moduleDuration]);

    const handleOptionSelect = (questionId: string, optionIndex: number) => {
        if (quizSubmitted) return;
        setAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
    };

    const handleSubmit = async () => {
        if (!quiz) return;

        // Submit Quiz
        let correctCount = 0;
        quiz.questions.forEach(q => {
            if (answers[q.id] === q.correctOptionIndex) {
                correctCount++;
            }
        });

        const finalScore = Math.round((correctCount / quiz.totalQuestions) * 100);
        setScore(finalScore);
        setQuizSubmitted(true);

        const passingScore = quiz.passingScore || 70;
        const passed = finalScore >= passingScore;

        // Clear timer storage
        localStorage.removeItem(`quiz_start_${quiz.id}_${user.id}`);

        if (user.id && courseId) {
            try {
                // Save detailed quiz result
                const { saveQuizResult, updateModuleProgress } = await import('../services/db');
                await saveQuizResult(user.id, courseId, quiz.id, finalScore, passed);

                // If passed, mark module as complete
                if (passed) {
                    await updateModuleProgress(user.id, courseId, quiz.moduleId);
                }
            } catch (error) {
                console.error("Failed to save quiz progress", error);
            }
        }
    };

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s.toString().padStart(2, '0')}`;
    };

    if (loading) return <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark text-text-light-primary dark:text-text-dark-primary">Loading quiz...</div>;
    if (!quiz) return <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark text-text-light-primary dark:text-text-dark-primary">Quiz not found</div>;

    const currentQuestion = quiz.questions[currentQuestionIndex];
    const isLastQuestion = currentQuestionIndex === quiz.questions.length - 1;
    const progress = ((currentQuestionIndex + 1) / quiz.totalQuestions) * 100;

    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark flex flex-col items-center p-6">
            <div className="w-full max-w-3xl">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <button
                        onClick={() => {
                            if (quiz && user.id) {
                                localStorage.removeItem(`quiz_start_${quiz.id}_${user.id}`);
                            }
                            navigate(`/course/${courseId}/module/${quiz?.moduleId}`);
                        }}
                        className="text-text-light-secondary dark:text-text-dark-secondary hover:text-primary flex items-center gap-1"
                    >
                        <span className="material-symbols-outlined">arrow_back</span>
                        Exit Quiz
                    </button>
                    <div className={`font-mono text-xl font-bold ${timeLeft < 60 ? 'text-red-500 animate-pulse' : 'text-primary'}`}>
                        {formatTime(timeLeft)}
                    </div>
                </div>

                {!quizSubmitted ? (
                    <div className="bg-card-light dark:bg-card-dark rounded-2xl shadow-lg border border-border-light dark:border-border-dark overflow-hidden">
                        {/* Progress Bar */}
                        <div className="w-full h-2 bg-background-light dark:bg-background-dark">
                            <div
                                className="h-full bg-primary transition-all duration-300"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>

                        <div className="p-8 md:p-10">
                            <div className="flex justify-between items-start mb-6">
                                <span className="text-sm font-bold text-primary uppercase tracking-wider">Question {currentQuestionIndex + 1} of {quiz.totalQuestions}</span>
                            </div>

                            <h2 className="text-2xl font-bold text-text-light-primary dark:text-text-dark-primary mb-8 leading-snug">
                                {currentQuestion.text}
                            </h2>

                            <div className="space-y-4">
                                {currentQuestion.options.map((option, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleOptionSelect(currentQuestion.id, index)}
                                        className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-4 group ${answers[currentQuestion.id] === index
                                            ? 'border-primary bg-primary/5 text-primary'
                                            : 'border-border-light dark:border-border-dark hover:border-primary/50 hover:bg-background-light dark:hover:bg-background-dark text-text-light-secondary dark:text-text-dark-secondary'
                                            }`}
                                    >
                                        <div className={`size-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${answers[currentQuestion.id] === index
                                            ? 'border-primary bg-primary text-black'
                                            : 'border-text-light-secondary dark:border-text-dark-secondary group-hover:border-primary'
                                            }`}>
                                            {answers[currentQuestion.id] === index && <span className="material-symbols-outlined text-[16px]">check</span>}
                                        </div>
                                        <span className="font-medium">{option}</span>
                                    </button>
                                ))}
                            </div>

                            <div className="mt-10 flex justify-between items-center">
                                <button
                                    onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                                    disabled={currentQuestionIndex === 0}
                                    className={`text-text-light-secondary dark:text-text-dark-secondary font-medium px-4 py-2 rounded-lg hover:bg-background-light dark:hover:bg-background-dark disabled:opacity-50 disabled:cursor-not-allowed`}
                                >
                                    Previous
                                </button>

                                {isLastQuestion ? (
                                    <button
                                        onClick={handleSubmit}
                                        disabled={Object.keys(answers).length !== quiz.totalQuestions}
                                        className="bg-primary text-black px-8 py-3 rounded-lg font-bold shadow-lg shadow-primary/30 hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-transform hover:scale-105"
                                    >
                                        Submit Quiz
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => setCurrentQuestionIndex(prev => Math.min(quiz.questions.length - 1, prev + 1))}
                                        className="bg-text-light-primary dark:bg-text-dark-primary text-background-light dark:text-background-dark px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-transform hover:scale-105"
                                    >
                                        Next Question
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="bg-card-light dark:bg-card-dark rounded-2xl shadow-lg border border-border-light dark:border-border-dark p-10 text-center animate-fade-in">
                        <div className={`size-24 rounded-full mx-auto flex items-center justify-center mb-6 ${score >= (quiz.passingScore || 70) ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                            <span className="material-symbols-outlined text-5xl">
                                {score >= (quiz.passingScore || 70) ? 'emoji_events' : 'sentiment_dissatisfied'}
                            </span>
                        </div>

                        <h2 className="text-3xl font-bold text-text-light-primary dark:text-text-dark-primary mb-2">
                            {score >= (quiz.passingScore || 70) ? 'Quiz Passed!' : 'Quiz Failed'}
                        </h2>
                        <p className="text-text-light-secondary dark:text-text-dark-secondary mb-8">
                            You scored <span className={`font-bold ${score >= (quiz.passingScore || 70) ? 'text-green-600' : 'text-red-600'}`}>{score}%</span>.
                            Passing score is {quiz.passingScore || 70}%.
                        </p>

                        <div className="flex justify-center gap-4">
                            {score < (quiz.passingScore || 70) && (
                                <button
                                    onClick={() => {
                                        setQuizSubmitted(false);
                                        setAnswers({});
                                        setCurrentQuestionIndex(0);
                                        setScore(0);
                                        localStorage.removeItem(`quiz_start_${quiz.id}_${user.id}`);
                                        const [minutes, seconds] = quiz.timeLimit.split(':').map(Number);
                                        setTimeLeft(minutes * 60 + seconds);
                                    }}
                                    className="px-6 py-3 border border-border-light dark:border-border-dark rounded-lg font-bold text-text-light-primary dark:text-text-dark-primary hover:bg-background-light dark:hover:bg-background-dark"
                                >
                                    Retake Quiz
                                </button>
                            )}
                            <button
                                onClick={() => navigate(`/course/${courseId}/module/${quiz.moduleId}`)}
                                className="px-6 py-3 bg-primary text-black rounded-lg font-bold hover:bg-primary/90 shadow-lg shadow-primary/30"
                            >
                                Return to Course
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};