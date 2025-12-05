import React, { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { Course } from '../types';
import { uploadCourseImage } from '../services/storage';

export const AdminCourseUpload: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [imageUploading, setImageUploading] = useState(false);
    const [formData, setFormData] = useState<Partial<Course>>({
        title: '',
        description: '',
        category: 'role-specific',
        image: 'https://picsum.photos/600/400',
        progress: 0,
        sections: []
    });

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setImageUploading(true);
        try {
            const downloadURL = await uploadCourseImage(file);
            setFormData(prev => ({ ...prev, image: downloadURL }));
        } catch (error) {
            console.error("Failed to upload image", error);
            alert("Failed to upload image. Please try again.");
        } finally {
            setImageUploading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await addDoc(collection(db, 'courses'), formData);
            alert('Course created successfully!');
            setFormData({
                title: '',
                description: '',
                category: 'role-specific',
                image: 'https://picsum.photos/600/400',
                progress: 0,
                sections: []
            });
        } catch (error) {
            console.error("Error creating course:", error);
            alert('Failed to create course.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-8 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Upload New Course</h1>
            <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div>
                    <label className="block text-sm font-medium mb-1 dark:text-gray-300">Course Title</label>
                    <input
                        type="text"
                        required
                        className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        value={formData.title}
                        onChange={e => setFormData({ ...formData, title: e.target.value })}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1 dark:text-gray-300">Description</label>
                    <textarea
                        required
                        className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        rows={4}
                        value={formData.description}
                        onChange={e => setFormData({ ...formData, description: e.target.value })}
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1 dark:text-gray-300">Category</label>
                        <select
                            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            value={formData.category}
                            onChange={e => setFormData({ ...formData, category: e.target.value as any })}
                        >
                            <option value="mandated">Mandated</option>
                            <option value="role-specific">Role Specific</option>
                            <option value="optional">Optional</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1 dark:text-gray-300">Course Image</label>
                        <div className="flex flex-col gap-2">
                            {/* Image Preview */}
                            {formData.image && (
                                <div className="relative w-full h-48 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                                    <img src={formData.image} alt="Course preview" className="w-full h-full object-cover" />
                                </div>
                            )}

                            {/* Upload Button */}
                            <div className="flex items-center gap-2">
                                <label className="flex-1 cursor-pointer">
                                    <div className="flex items-center justify-center w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                                        <span className="material-symbols-outlined text-lg mr-2">cloud_upload</span>
                                        {imageUploading ? 'Uploading...' : 'Upload Image'}
                                    </div>
                                    <input
                                        type="file"
                                        className="hidden"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        disabled={imageUploading}
                                    />
                                </label>
                                <span className="text-gray-400 text-sm">or</span>
                                <input
                                    type="text"
                                    placeholder="Enter Image URL"
                                    className="flex-[2] p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                    value={formData.image}
                                    onChange={e => setFormData({ ...formData, image: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-4">
                    <button
                        type="submit"
                        disabled={loading}
                        className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-50"
                    >
                        {loading ? 'Creating...' : 'Create Course'}
                    </button>
                </div>
            </form>
        </div>
    );
};
