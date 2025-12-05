// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD5ubT4lhFdBerRsiO5Kh0AsvJk9cgepOQ",
    authDomain: "digital-mojo-lms.firebaseapp.com",
    projectId: "digital-mojo-lms",
    storageBucket: "digital-mojo-lms.firebasestorage.app",
    messagingSenderId: "544723218804",
    appId: "1:544723218804:web:384a529c1ee8d44300bc21",
    measurementId: "G-45VHBZKPXH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
import { getStorage } from "firebase/storage";
export const storage = getStorage(app);