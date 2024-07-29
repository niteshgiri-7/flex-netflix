// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBS3fmnbD3WiG7UAa0lX_Ux8_9P7VN5IE",
  authDomain: "flex-netflix-9363e.firebaseapp.com",
  projectId: "flex-netflix-9363e",
  storageBucket: "flex-netflix-9363e.appspot.com",
  messagingSenderId: "323083208010",
  appId: "1:323083208010:web:639ca64417370dfe32adb3",
  measurementId: "G-HCCCC5JF4C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth  = getAuth();