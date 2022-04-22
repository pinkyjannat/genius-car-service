// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKVCPdqxTeYKootwX8sE_4iX2nPCUWQG4",
  authDomain: "genius-car-service-367ee.firebaseapp.com",
  projectId: "genius-car-service-367ee",
  storageBucket: "genius-car-service-367ee.appspot.com",
  messagingSenderId: "80496472007",
  appId: "1:80496472007:web:dc546bc67c2b945a56b3e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;