// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB84qXce8j_UESzpTK9QVEQc4OkGZDzN10",
  authDomain: "new-shopping-app-b0712.firebaseapp.com",
  projectId: "new-shopping-app-b0712",
  storageBucket: "new-shopping-app-b0712.firebasestorage.app",
  messagingSenderId: "335082739750",
  appId: "1:335082739750:web:f2de82d83ca161c976eee7",
  measurementId: "G-G8NZ14JR4F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);