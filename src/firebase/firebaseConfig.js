// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbsWOxCP7WsRSd3BqC1qHqmmdrGt9IYsY",
  authDomain: "ecomerce-airsoft.firebaseapp.com",
  projectId: "ecomerce-airsoft",
  storageBucket: "ecomerce-airsoft.firebasestorage.app",
  messagingSenderId: "850144382338",
  appId: "1:850144382338:web:a303434b37fc0474dfd39b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app)
const auth = getAuth(app)

export {auth, fireDB}