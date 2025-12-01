import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { User, Course } from '../types';

interface CertificateGeneratorProps {
    user: User;
    course: Course;
    onClose: () => void;
}

export const CertificateGenerator: React.FC<CertificateGeneratorProps> = ({ user, course, onClose }) => {
    const certificateRef = useRef<HTMLDivElement>(null);

    const handleDownload = async () => {
        if (!certificateRef.current) return;

        try {
            const canvas = await html2canvas(certificateRef.current, {
                scale: 2, // Higher quality
                logging: false,
                useCORS: true // For images
            });

            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: 'landscape',
                unit: 'px',
                format: [canvas.width, canvas.height]
            });

            pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
            pdf.save(`Certificate-${course.title.replace(/\s+/g, '-')}.pdf`);
            onClose();
        } catch (error) {
            console.error("Certificate generation failed", error);
            alert("Failed to generate certificate. Please try again.");
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full overflow-hidden flex flex-col">
                <div className="p-4 border-b flex justify-between items-center bg-gray-50">
                    <h3 className="font-bold text-lg text-gray-800">Course Certificate</h3>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                <div className="overflow-auto p-8 bg-gray-100 flex justify-center">
                    {/* Certificate Template */}
                    <div
                        ref={certificateRef}
                        className="w-[800px] h-[600px] bg-white border-[20px] border-double border-primary/20 p-12 flex flex-col items-center justify-center text-center relative shadow-lg"
                        style={{ fontFamily: "'Times New Roman', serif" }}
                    >
                        {/* Decorative Corner */}
                        <div className="absolute top-4 left-4 size-16 border-t-4 border-l-4 border-primary"></div>
                        <div className="absolute top-4 right-4 size-16 border-t-4 border-r-4 border-primary"></div>
                        <div className="absolute bottom-4 left-4 size-16 border-b-4 border-l-4 border-primary"></div>
                        <div className="absolute bottom-4 right-4 size-16 border-b-4 border-r-4 border-primary"></div>

                        {/* Logo Placeholder */}
                        <div className="mb-8">
                            <div className="text-3xl font-bold text-primary tracking-widest uppercase">Digital Mojo</div>
                        </div>

                        <h1 className="text-5xl font-bold text-gray-900 mb-4 uppercase tracking-wide">Certificate of Completion</h1>

                        <p className="text-xl text-gray-600 mb-8 italic">This is to certify that</p>

                        <h2 className="text-4xl font-bold text-primary mb-2 border-b-2 border-gray-300 pb-2 px-12 min-w-[400px]">
                            {user.name}
                        </h2>

                        <p className="text-xl text-gray-600 mt-8 mb-4 italic">has successfully completed the course</p>

                        <h3 className="text-3xl font-bold text-gray-800 mb-12">
                            {course.title}
                        </h3>

                        <div className="flex justify-between w-full px-12 mt-auto">
                            <div className="text-center">
                                <div className="w-40 border-b border-gray-400 mb-2"></div>
                                <p className="text-gray-600 font-bold">Date</p>
                                <p className="text-gray-500">{new Date().toLocaleDateString()}</p>
                            </div>

                            <div className="size-24 rounded-full border-4 border-primary/30 flex items-center justify-center">
                                <span className="material-symbols-outlined text-5xl text-primary/50">verified</span>
                            </div>

                            <div className="text-center">
                                <div className="w-40 border-b border-gray-400 mb-2"></div>
                                <p className="text-gray-600 font-bold">Instructor / Director</p>
                                <p className="text-gray-500">Digital Mojo Team</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-4 border-t bg-gray-50 flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-gray-600 hover:bg-gray-200 rounded-lg font-medium"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleDownload}
                        className="px-6 py-2 bg-primary text-black rounded-lg font-bold hover:bg-primary/90 shadow-lg flex items-center gap-2"
                    >
                        <span className="material-symbols-outlined">download</span>
                        Download PDF
                    </button>
                </div>
            </div>
        </div>
    );
};
