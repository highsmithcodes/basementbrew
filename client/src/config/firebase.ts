// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAELlWdNRMGKHOHg8xGsAmeSBaAWTr0ydA",
    authDomain: "basementbrew-b354f.firebaseapp.com",
    projectId: "basementbrew-b354f",
    storageBucket: "basementbrew-b354f.appspot.com",
    messagingSenderId: "100384236428",
    appId: "1:100384236428:web:591c495e1e962c6a4aaca9",
    measurementId: "G-Y5TNCYHBYM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();