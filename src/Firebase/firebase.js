// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBjUO_hm86QdstaniSIxOtzCVyYCRsVdzM",
  authDomain: "crime-management-system-8c803.firebaseapp.com",
  projectId: "crime-management-system-8c803",
  storageBucket: "crime-management-system-8c803.appspot.com",
  messagingSenderId: "953222463736",
  appId: "1:953222463736:web:170464f214503b3206bb0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth= getAuth(app)