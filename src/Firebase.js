// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABtKlscoSkoei95tZ0Lw25p-QcofFXfh0",
  authDomain: "swiggybackend.firebaseapp.com",
  projectId: "swiggybackend",
  storageBucket: "swiggybackend.firebasestorage.app",
  messagingSenderId: "338989728546",
  appId: "1:338989728546:web:043f614dd9b91310ef1b7b",
  measurementId: "G-DRPWWBKDTE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);