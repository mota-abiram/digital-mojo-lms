import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MOCK_QUIZZES, MOCK_COURSES } from '../constants';
import { Header } from '../components/Header';
import { User } from '../types';

interface QuizProps {
    user: User;
    onLogout: () => void;
}

export const QuizPage: React.FC<QuizProps> = ({ user, onLogout }) => {
    const { courseId, quizId } = useParams();
    const navigate = useNavigate();
    const quiz = quizId ? MOCK_QUIZZES[quizId] : undefined;

    if (!quiz) return <div>Quiz not found</div>;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [answers, setAnswers] = useState<Record<string, number>>({});
    const [quizSubmitted, setQuizSubmitted] = useState(false);
    const [score, setScore] = useState(0);

    const currentQuestion = quiz.questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex) / quiz.totalQuestions) * 100;

    const handleOptionSelect = (index: number) => {
        if (quizSubmitted) return;
        setSelectedOption(index);
        setAnswers({ ...answers, [currentQuestion.id]: index });
    };

    const handleNext = async () => {
        if (currentQuestionIndex < quiz.questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
            const nextQId = quiz.questions[currentQuestionIndex + 1].id;
            setSelectedOption(answers[nextQId] ?? null);
        } else {
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
            if (finalScore >= passingScore && user.id && courseId) {
                // Mark module as complete
                try {
                    const { updateModuleProgress } = await import('../services/db');
                    await updateModuleProgress(user.id, courseId, quiz.moduleId);
                } catch (error) {
                    console.error("Failed to save quiz progress", error);
                }
            }
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prev => prev - 1);
            const prevQId = quiz.questions[currentQuestionIndex - 1].id;
            setSelectedOption(answers[prevQId] ?? null);
        }
    };

    // Calculate next module
    const getNextModuleId = () => {
        if (!courseId) return null;
        const course = MOCK_COURSES.find(c => c.id === courseId);
        if (!course) return null;

        const allModules = course.sections.flatMap(s => s.modules);
        const currentIndex = allModules.findIndex(m => m.id === quiz.moduleId);

        if (currentIndex !== -1 && currentIndex < allModules.length - 1) {
            return allModules[currentIndex + 1].id;
        }
        return null;
    };

    const nextModuleId = getNextModuleId();

    if (quizSubmitted) {
        return (
            <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-text-light-primary dark:text-text-dark-primary">
                <Header user={user} onLogout={onLogout} showSearch={false} />
                <main className="flex flex-1 items-center justify-center p-4">
                    <div className="bg-card-light dark:bg-card-dark p-8 rounded-xl shadow-lg max-w-md w-full text-center border border-border-light dark:border-border-dark">
                        <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 ${score >= (quiz.passingScore || 70) ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                            <span className="material-symbols-outlined text-5xl">{score >= (quiz.passingScore || 70) ? 'emoji_events' : 'sentiment_dissatisfied'}</span>
                        </div>
                        <h1 className="text-3xl font-bold mb-2">{score >= (quiz.passingScore || 70) ? 'Quiz Passed!' : 'Quiz Failed'}</h1>
                        <p className="text-text-light-secondary dark:text-text-dark-secondary mb-6">
                            You scored <span className={`font-bold ${score >= (quiz.passingScore || 70) ? 'text-green-600' : 'text-red-600'}`}>{score}%</span>
                        </p>
                        <p className="text-sm mb-8 text-text-light-secondary dark:text-text-dark-secondary">
                            {score >= (quiz.passingScore || 70) ? 'Great job! You have completed this module.' : `You need ${quiz.passingScore || 70}% to pass. Please review the material and try again.`}
                        </p>
                        <div className="flex flex-col gap-3">
                            {score >= (quiz.passingScore || 70) && nextModuleId ? (
                                <button
                                    onClick={() => navigate(`/course/${courseId}`, { state: { activeModuleId: nextModuleId, completedModuleId: quiz.moduleId } })}
                                    className="w-full py-3 bg-primary text-white rounded-lg font-bold hover:bg-primary/90"
                                >
                                    Next Module
                                </button>
                            ) : (
                                <button
                                    onClick={() => navigate(`/course/${courseId}`)}
                                    className="w-full py-3 bg-primary text-white rounded-lg font-bold hover:bg-primary/90"
                                >
                                    Return to Course
                                </button>
                            )}

                            {score < (quiz.passingScore || 70) && (
                                <button
                                    onClick={() => window.location.reload()}
                                    className="w-full py-3 bg-transparent border border-border-light dark:border-border-dark rounded-lg font-bold hover:bg-background-light dark:hover:bg-background-dark/50"
                                >
                                    Retry Quiz
                                </button>
                            )}
                            {/* If passed and no next module, maybe show Dashboard button? */}
                            {score >= (quiz.passingScore || 70) && !nextModuleId && (
                                <button
                                    onClick={() => navigate('/dashboard')}
                                    className="w-full py-3 bg-transparent border border-border-light dark:border-border-dark rounded-lg font-bold hover:bg-background-light dark:hover:bg-background-dark/50"
                                >
                                    Back to Dashboard
                                </button>
                            )}
                        </div>
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-text-light-primary dark:text-text-dark-primary">
            <Header user={user} onLogout={onLogout} showSearch={false} />

            <main className="flex flex-1 justify-center py-8 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col w-full max-w-3xl flex-1 gap-8">

                    <div className="flex flex-col gap-2">
                        <button onClick={() => navigate(`/course/${courseId}`)} className="flex items-center gap-1 text-sm text-text-light-secondary dark:text-text-dark-secondary hover:text-primary w-fit mb-2">
                            <span className="material-symbols-outlined text-lg">arrow_back</span>
                            Back to Course
                        </button>
                        <h1 className="text-2xl md:text-3xl font-black leading-tight">{quiz.title}</h1>
                    </div>

                    {/* Progress Card */}
                    <div className="flex flex-col gap-3 rounded-xl bg-card-light dark:bg-card-dark p-6 shadow-sm border border-border-light dark:border-border-dark">
                        <div className="flex justify-between items-center">
                            <p className="text-base font-bold">Question {currentQuestionIndex + 1} of {quiz.totalQuestions}</p>
                            <div className="flex items-center gap-2 text-sm text-text-light-secondary dark:text-text-dark-secondary bg-background-light dark:bg-background-dark px-3 py-1 rounded-full">
                                <span className="material-symbols-outlined text-lg">timer</span>
                                <span>{quiz.timeLimit} remaining</span>
                            </div>
                        </div>
                        <div className="w-full bg-background-light dark:bg-background-dark rounded-full h-2.5 overflow-hidden">
                            <div className="h-full bg-primary transition-all duration-300" style={{ width: `${progress}%` }}></div>
                        </div>
                    </div>

                    {/* Question Card */}
                    <div className="flex flex-col gap-6 rounded-xl bg-card-light dark:bg-card-dark p-6 md:p-8 shadow-sm border border-border-light dark:border-border-dark">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="hidden md:block w-32 h-32 rounded-lg bg-gray-100 dark:bg-gray-800 flex-shrink-0 bg-center bg-cover" style={{ backgroundImage: `url("https://picsum.photos/seed/quiz${currentQuestionIndex}/200/200")` }}></div>
                            <div className="flex-1">
                                <p className="text-lg md:text-xl font-bold leading-relaxed mb-2">
                                    {currentQuestion.text}
                                </p>
                                <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary">Select one of the following options.</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 mt-2">
                            {currentQuestion.options.map((option, idx) => (
                                <label
                                    key={idx}
                                    className={`flex cursor-pointer items-center gap-4 rounded-lg border p-4 transition-all duration-200 group
                                        ${selectedOption === idx
                                            ? 'border-primary bg-primary/5 dark:bg-primary/20 ring-1 ring-primary'
                                            : 'border-border-light dark:border-border-dark hover:border-primary/50 hover:bg-background-light dark:hover:bg-background-dark/50'
                                        }`}
                                >
                                    <div className={`flex items-center justify-center w-5 h-5 rounded-full border-2 transition-colors ${selectedOption === idx ? 'border-primary' : 'border-gray-400 group-hover:border-primary/70'}`}>
                                        {selectedOption === idx && <div className="w-2.5 h-2.5 bg-primary rounded-full" />}
                                    </div>
                                    <input
                                        type="radio"
                                        name={`question-${currentQuestion.id}`}
                                        className="hidden"
                                        checked={selectedOption === idx}
                                        onChange={() => handleOptionSelect(idx)}
                                    />
                                    <div className="flex grow flex-col">
                                        <p className={`text-base font-medium ${selectedOption === idx ? 'text-primary' : 'text-text-light-primary dark:text-text-dark-primary'}`}>{option}</p>
                                    </div>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex flex-col-reverse sm:flex-row justify-between gap-4 mt-2">
                        <button
                            onClick={handlePrevious}
                            disabled={currentQuestionIndex === 0}
                            className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-base font-bold transition-colors ${currentQuestionIndex === 0
                                ? 'opacity-50 cursor-not-allowed text-gray-400 bg-gray-100 dark:bg-gray-800'
                                : 'bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark hover:bg-gray-50 dark:hover:bg-gray-800'
                                }`}
                        >
                            <span className="material-symbols-outlined">arrow_back</span>
                            Previous
                        </button>
                        <div className="flex gap-4 w-full sm:w-auto">
                            <button
                                onClick={handleNext}
                                disabled={selectedOption === null}
                                className={`flex flex-1 sm:flex-initial items-center justify-center gap-2 px-8 py-3 rounded-lg text-base font-bold text-white transition-all shadow-lg ${selectedOption === null
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-primary hover:bg-primary/90 shadow-primary/30'
                                    }`}
                            >
                                {currentQuestionIndex === quiz.questions.length - 1 ? 'Submit Quiz' : 'Next'}
                                {currentQuestionIndex < quiz.questions.length - 1 && <span className="material-symbols-outlined">arrow_forward</span>}
                            </button>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
};