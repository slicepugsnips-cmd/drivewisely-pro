import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDhshJ5BMKQpdF2BVTkS1F5T0qt6j70jFs",
  authDomain: "drivewisely-pro.firebaseapp.com",
  projectId: "drivewisely-pro",
  storageBucket: "drivewisely-pro.firebasestorage.app",
  messagingSenderId: "764035274458",
  appId: "1:764035274458:web:ae7d94d823bb0e7844f7e3",
  measurementId: "G-FD9L9W82BV"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
