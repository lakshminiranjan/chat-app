import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIpSy1hJWYZr2T8XI3J9TOrdEm3Fd9xHA",
  authDomain: "chat-f7d03.firebaseapp.com",
  projectId: "chat-f7d03",
  storageBucket: "chat-f7d03.appspot.com",
  messagingSenderId: "227699283931",
  appId: "1:227699283931:web:e375604d4b664a0c6579fe",
  measurementId: "G-W1TLPBJ1TN"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
