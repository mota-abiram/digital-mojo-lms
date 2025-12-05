import { storage } from '../firebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

export const uploadFile = async (file: File, path: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        console.log(`Starting upload for file: ${file.name} to path: ${path}`);
        const storageRef = ref(storage, path);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
            },
            (error) => {
                console.error("Upload failed internally:", error);
                reject(error);
            },
            async () => {
                try {
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                    console.log('File available at', downloadURL);
                    resolve(downloadURL);
                } catch (urlError) {
                    console.error("Failed to get download URL", urlError);
                    reject(urlError);
                }
            }
        );
    });
};

export const uploadCourseImage = async (file: File): Promise<string> => {
    const timestamp = Date.now();
    const path = `course-images/${timestamp}_${file.name}`;
    return uploadFile(file, path);
};
