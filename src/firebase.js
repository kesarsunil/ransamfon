// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUG1wcHVqNdzvJGUQ46O5qnXqFz81P0z0",
  authDomain: "roseeee-a33f3.firebaseapp.com",
  projectId: "roseeee-a33f3",
  storageBucket: "roseeee-a33f3.firebasestorage.app",
  messagingSenderId: "464157971652",
  appId: "1:464157971652:web:3cf397f961a5542cd6e591"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export default app;
