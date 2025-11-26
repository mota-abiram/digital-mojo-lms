import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MOCK_QUIZZES } from '../constants';
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

    const currentQuestion = quiz.questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex) / quiz.totalQuestions) * 100;

    const handleOptionSelect = (index: number) => {
        setSelectedOption(index);
        setAnswers({ ...answers, [currentQuestion.id]: index });
    };

    const handleNext = () => {
        if (currentQuestionIndex < quiz.questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
            const nextQId = quiz.questions[currentQuestionIndex + 1].id;
            setSelectedOption(answers[nextQId] ?? null);
        } else {
            // Finish
            alert('Quiz Submitted! Returning to course.');
            navigate(`/course/${courseId}`);
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prev => prev - 1);
            const prevQId = quiz.questions[currentQuestionIndex - 1].id;
            setSelectedOption(answers[prevQId] ?? null);
        }
    };

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