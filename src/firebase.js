// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

//Goo To Googgle FIREBASE to create your own set
const firebaseConfig = {
  apiKey: "AIzaSyApi99PzX5ScoTBw9X_kZSkmTEdQH-OJZU",
  authDomain: "chat-app-185696.firebaseapp.com",
  projectId: "chat-app-185696",
  storageBucket: "chat-app-185696.appspot.com",
  messagingSenderId: "199878324107",
  appId: "1:199878324107:web:4d16bd6ff482a5165f098e",
  measurementId: "G-ZK84JL07S3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
