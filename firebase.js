// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import{ getFirestore } from "firebase/firestore";
import{ getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "twitter-4dba5.firebaseapp.com",
  projectId: "twitter-4dba5",
  storageBucket: "twitter-4dba5.appspot.com",
  messagingSenderId: "45876639793",
  appId: "1:45876639793:web:a482422c10daaf8d987d10"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export {app, db, storage};