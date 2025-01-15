// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDP-oJZ-Qa5ElYxR7su1ss6g0-Go1OSg1Y",
  authDomain: "swiggyclown-49e66.firebaseapp.com",
  projectId: "swiggyclown-49e66",
  storageBucket: "swiggyclown-49e66.appspot.com",
  messagingSenderId: "788411921983",
  appId: "1:788411921983:web:8984e28afea09d13012a8a",
  measurementId: "G-YBDP5FB31X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()