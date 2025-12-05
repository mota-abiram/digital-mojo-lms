import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCourses } from '../services/db';
import { Course } from '../types';
import { db } from '../firebaseConfig';
import { deleteDoc, doc } from 'firebase/firestore';

export const AdminCourseManager: React.FC = () => {
    const navigate = useNavigate();
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        setLoading(true);
        const data = await getCourses();
        setCourses(data);
        setLoading(false);
    };

    const handleDelete = async (courseId: string) => {
        if (window.confirm('Are you sure you want to delete this course? This action cannot be undone.')) {
            try {
                await deleteDoc(doc(db, 'courses', courseId));
                setCourses(courses.filter(c => c.id !== courseId));
            } catch (error) {
                console.error("Error deleting course", error);
                alert("Failed to delete course");
            }
        }
    };

    if (loading) return <div className="p-10 text-center">Loading courses...</div>;

    return (
        <div className="p-6 md:p-10 bg-background-light dark:bg-background-dark min-h-screen">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-text-light-primary dark:text-text-dark-primary">Course Manager</h1>
                <button
                    onClick={() => navigate('/admin/course/new')}
                    className="px-6 py-2 bg-primary text-black rounded-lg font-bold hover:bg-primary/90 shadow-md"
                >
                    + Create New Course
                </button>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {courses.map(course => (
                    <div key={course.id} className="bg-card-light dark:bg-card-dark p-6 rounded-xl border border-border-light dark:border-border-dark shadow-sm flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-4 flex-1">
                            <div className="w-16 h-16 rounded-lg bg-cover bg-center flex-shrink-0" style={{ backgroundImage: `url("${course.image}")` }}></div>
                            <div>
                                <h3 className="text-lg font-bold text-text-light-primary dark:text-text-dark-primary">{course.title}</h3>
                                <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary line-clamp-1">{course.description}</p>
                                <div className="flex gap-2 mt-1">
                                    <span className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400">{course.category}</span>
                                    {course.disableQuizzes && <span className="text-xs px-2 py-0.5 bg-red-100 text-red-600 rounded-full">Quizzes Disabled</span>}
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={() => navigate(`/admin/course/edit/${course.id}`)}
                                className="px-4 py-2 border border-border-light dark:border-border-dark rounded-lg text-sm font-bold hover:bg-background-light dark:hover:bg-background-dark transition-colors"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(course.id)}
                                className="px-4 py-2 bg-red-50 text-red-600 rounded-lg text-sm font-bold hover:bg-red-100 transition-colors"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
