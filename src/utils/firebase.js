// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1VQ9V0LHCaF3I7iw7hlDmFK_pAtzOW7c",
  authDomain: "flex-netflix-d33ce.firebaseapp.com",
  projectId: "flex-netflix-d33ce",
  storageBucket: "flex-netflix-d33ce.appspot.com",
  messagingSenderId: "640048958250",
  appId: "1:640048958250:web:4cca9fac6adca09d90ec53",
  measurementId: "G-8FM785DLNK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth  = getAuth();