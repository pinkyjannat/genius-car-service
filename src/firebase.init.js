// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-2YrYS7OFA3QbsIsJsOX1P-Jmu251eFQ",
  authDomain: "ema-john-auth-614e9.firebaseapp.com",
  projectId: "ema-john-auth-614e9",
  storageBucket: "ema-john-auth-614e9.appspot.com",
  messagingSenderId: "769801549395",
  appId: "1:769801549395:web:0661fd4fec4315bc58f8a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;