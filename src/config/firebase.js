// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBf5vOoL8UyGJxTjppr_-xSdX_5ld42b-M",
  authDomain: "watchamovie-567a2.firebaseapp.com",
  projectId: "watchamovie-567a2",
  storageBucket: "watchamovie-567a2.appspot.com",
  messagingSenderId: "814617643999",
  appId: "1:814617643999:web:0742cc42bb5e983025526a",
  measurementId: "G-FFMKC4SNN7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { auth };