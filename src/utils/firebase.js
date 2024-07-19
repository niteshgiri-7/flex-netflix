// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics} from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6w87tWE4lwtpj3vQmlVRd2baf99jxqvo",
  authDomain: "flex-netflix.firebaseapp.com",
  projectId: "flex-netflix",
  storageBucket: "flex-netflix.appspot.com",
  messagingSenderId: "354055316798",
  appId: "1:354055316798:web:d3bacc401ca4c84e2e786f",
  measurementId: "G-Y17Y1Z0RL3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();