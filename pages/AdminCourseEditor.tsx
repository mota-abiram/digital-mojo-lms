import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../firebaseConfig';
import { doc, getDoc, setDoc, collection, addDoc } from 'firebase/firestore';
import { Course, CourseSection, CourseModule } from '../types';
import { getCourse } from '../services/db';

export const AdminCourseEditor: React.FC = () => {
    const { courseId } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    const [course, setCourse] = useState<Partial<Course>>({
        title: '',
        description: '',
        image: 'https://picsum.photos/seed/new/600/400',
        category: 'role-specific',
        progress: 0,
        sections: [],
        disableQuizzes: false
    });

    useEffect(() => {
        const fetchCourseData = async () => {
            if (courseId) {
                const data = await getCourse(courseId);
                if (data) {
                    setCourse(data);
                }
            }
            setLoading(false);
        };
        fetchCourseData();
    }, [courseId]);

    const handleSave = async () => {
        setSaving(true);
        try {
            if (courseId) {
                await setDoc(doc(db, 'courses', courseId), course as Course);
            } else {
                // Create new course with a generated ID if not provided (though usually we might want a slug)
                // For now let's let Firestore generate ID or use a slug if we wanted
                const newCourseRef = await addDoc(collection(db, 'courses'), course);
                // We might want to update the ID field to match the doc ID if we store ID in the doc
                await setDoc(newCourseRef, { ...course, id: newCourseRef.id });
            }
            alert('Course saved successfully!');
            navigate('/admin/courses');
        } catch (error) {
            console.error("Error saving course", error);
            alert("Failed to save course");
        } finally {
            setSaving(false);
        }
    };

    // --- Section Helpers ---
    const addSection = () => {
        const newSection: CourseSection = {
            id: `s${Date.now()}`,
            title: 'New Section',
            modules: []
        };
        setCourse({ ...course, sections: [...(course.sections || []), newSection] });
    };

    const updateSection = (index: number, field: keyof CourseSection, value: any) => {
        const newSections = [...(course.sections || [])];
        newSections[index] = { ...newSections[index], [field]: value };
        setCourse({ ...course, sections: newSections });
    };

    const removeSection = (index: number) => {
        if (window.confirm('Delete this section?')) {
            const newSections = [...(course.sections || [])];
            newSections.splice(index, 1);
            setCourse({ ...course, sections: newSections });
        }
    };

    // --- Module Helpers ---
    const addModule = (sectionIndex: number) => {
        const newModule: CourseModule = {
            id: `m${Date.now()}`,
            title: 'New Module',
            type: 'video',
            duration: '10 min',
            isCompleted: false,
            videoUrl: '',
            disableQuiz: false
        };
        const newSections = [...(course.sections || [])];
        newSections[sectionIndex].modules.push(newModule);
        setCourse({ ...course, sections: newSections });
    };

    const updateModule = (sectionIndex: number, moduleIndex: number, field: keyof CourseModule, value: any) => {
        const newSections = [...(course.sections || [])];
        newSections[sectionIndex].modules[moduleIndex] = {
            ...newSections[sectionIndex].modules[moduleIndex],
            [field]: value
        };
        setCourse({ ...course, sections: newSections });
    };

    const removeModule = (sectionIndex: number, moduleIndex: number) => {
        if (window.confirm('Delete this module?')) {
            const newSections = [...(course.sections || [])];
            newSections[sectionIndex].modules.splice(moduleIndex, 1);
            setCourse({ ...course, sections: newSections });
        }
    };

    if (loading) return <div className="p-10 text-center">Loading editor...</div>;

    return (
        <div className="p-6 md:p-10 bg-background-light dark:bg-background-dark min-h-screen pb-20">
            <div className="flex justify-between items-center mb-8 sticky top-0 bg-background-light dark:bg-background-dark z-10 py-4 border-b border-border-light dark:border-border-dark">
                <div className="flex items-center gap-4">
                    <button onClick={() => navigate('/admin/courses')} className="text-text-light-secondary hover:text-primary">
                        <span className="material-symbols-outlined">arrow_back</span>
                    </button>
                    <h1 className="text-2xl font-bold text-text-light-primary dark:text-text-dark-primary">
                        {courseId ? 'Edit Course' : 'Create New Course'}
                    </h1>
                </div>
                <button
                    onClick={handleSave}
                    disabled={saving}
                    className="px-6 py-2 bg-primary text-black rounded-lg font-bold hover:bg-primary/90 shadow-md disabled:opacity-50"
                >
                    {saving ? 'Saving...' : 'Save Changes'}
                </button>
            </div>

            <div className="space-y-8 max-w-4xl mx-auto">
                {/* Course Details */}
                <div className="bg-card-light dark:bg-card-dark p-6 rounded-xl border border-border-light dark:border-border-dark shadow-sm space-y-4">
                    <h2 className="text-xl font-bold mb-4">Course Details</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Title</label>
                            <input
                                type="text"
                                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                                value={course.title}
                                onChange={e => setCourse({ ...course, title: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Category</label>
                            <select
                                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                                value={course.category}
                                onChange={e => setCourse({ ...course, category: e.target.value as any })}
                            >
                                <option value="mandated">Mandated</option>
                                <option value="role-specific">Role Specific</option>
                                <option value="optional">Optional</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Description</label>
                        <textarea
                            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                            rows={3}
                            value={course.description}
                            onChange={e => setCourse({ ...course, description: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Image URL</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                            value={course.image}
                            onChange={e => setCourse({ ...course, image: e.target.value })}
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="disableQuizzes"
                            checked={course.disableQuizzes || false}
                            onChange={e => setCourse({ ...course, disableQuizzes: e.target.checked })}
                            className="w-4 h-4 text-primary rounded focus:ring-primary"
                        />
                        <label htmlFor="disableQuizzes" className="text-sm font-medium cursor-pointer">
                            Disable Certificates & Quizzes (Global for this course)
                        </label>
                    </div>
                </div>

                {/* Sections */}
                <div className="space-y-6">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold">Curriculum</h2>
                        <button onClick={addSection} className="text-primary font-bold text-sm hover:underline">+ Add Section</button>
                    </div>

                    {course.sections?.map((section, sIndex) => (
                        <div key={section.id} className="bg-card-light dark:bg-card-dark p-6 rounded-xl border border-border-light dark:border-border-dark shadow-sm">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="material-symbols-outlined text-gray-400">drag_indicator</span>
                                <input
                                    type="text"
                                    className="flex-1 p-2 font-bold text-lg border-b border-transparent hover:border-gray-300 focus:border-primary bg-transparent outline-none"
                                    value={section.title}
                                    onChange={e => updateSection(sIndex, 'title', e.target.value)}
                                    placeholder="Section Title"
                                />
                                <button onClick={() => removeSection(sIndex)} className="text-red-500 hover:bg-red-50 p-2 rounded">
                                    <span className="material-symbols-outlined">delete</span>
                                </button>
                            </div>

                            {/* Modules */}
                            <div className="pl-8 space-y-4">
                                {section.modules.map((module, mIndex) => (
                                    <div key={module.id} className="bg-background-light dark:bg-background-dark p-4 rounded-lg border border-border-light dark:border-border-dark">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                                            <input
                                                type="text"
                                                className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 font-medium"
                                                value={module.title}
                                                onChange={e => updateModule(sIndex, mIndex, 'title', e.target.value)}
                                                placeholder="Module Title"
                                            />
                                            <div className="flex gap-2">
                                                <select
                                                    className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                                                    value={module.type}
                                                    onChange={e => updateModule(sIndex, mIndex, 'type', e.target.value)}
                                                >
                                                    <option value="video">Video</option>
                                                    <option value="reading">Reading</option>
                                                    <option value="quiz">Quiz</option>
                                                </select>
                                                <input
                                                    type="text"
                                                    className="w-24 p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                                                    value={module.duration}
                                                    onChange={e => updateModule(sIndex, mIndex, 'duration', e.target.value)}
                                                    placeholder="Duration"
                                                />
                                            </div>
                                        </div>

                                        <div className="mb-2">
                                            <input
                                                type="text"
                                                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 text-sm"
                                                value={module.description || ''}
                                                onChange={e => updateModule(sIndex, mIndex, 'description', e.target.value)}
                                                placeholder="Module Description"
                                            />
                                        </div>

                                        {module.type === 'video' && (
                                            <div className="mb-2">
                                                <input
                                                    type="text"
                                                    className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 text-sm font-mono"
                                                    value={module.videoUrl || ''}
                                                    onChange={e => updateModule(sIndex, mIndex, 'videoUrl', e.target.value)}
                                                    placeholder="YouTube URL"
                                                />
                                            </div>
                                        )}

                                        <div className="flex justify-between items-center mt-2">
                                            <div className="flex items-center gap-2">
                                                <input
                                                    type="checkbox"
                                                    id={`disableQuiz-${module.id}`}
                                                    checked={module.disableQuiz || false}
                                                    onChange={e => updateModule(sIndex, mIndex, 'disableQuiz', e.target.checked)}
                                                    className="w-4 h-4 text-primary rounded focus:ring-primary"
                                                />
                                                <label htmlFor={`disableQuiz-${module.id}`} className="text-xs text-text-light-secondary cursor-pointer">
                                                    Disable Quiz for this module
                                                </label>
                                            </div>
                                            <button onClick={() => removeModule(sIndex, mIndex)} className="text-red-500 text-xs hover:underline">
                                                Remove Module
                                            </button>
                                        </div>
                                    </div>
                                ))}
                                <button onClick={() => addModule(sIndex)} className="w-full py-2 border-2 border-dashed border-border-light dark:border-border-dark rounded-lg text-text-light-secondary hover:border-primary hover:text-primary transition-colors text-sm font-bold">
                                    + Add Module
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
