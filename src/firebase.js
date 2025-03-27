// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBeYzxqkMxaMwvOX19FS0TjjsQt5VnPs6Y",
    authDomain: "mern-chat-app-9966.firebaseapp.com",
    projectId: "mern-chat-app-9966",
    storageBucket: "mern-chat-app-9966.firebasestorage.app",
    messagingSenderId: "597728710295",
    appId: "1:597728710295:web:3d7d8799d7f8a9472c23d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;