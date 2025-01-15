// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjCLn31PO71sHip5tCr0yd0qwlmt5tORI",
  authDomain: "bhooklagi-e52d6.firebaseapp.com",
  projectId: "bhooklagi-e52d6",
  storageBucket: "bhooklagi-e52d6.firebasestorage.app",
  messagingSenderId: "850175519640",
  appId: "1:850175519640:web:4b388c1ab3f977fd0459ed",
  measurementId: "G-WPTG02BRXD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);