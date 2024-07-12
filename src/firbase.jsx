// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZmdOkI29WkLa0RLsds_bOeRsMB4z-Tm8",
  authDomain: "ytblite1.firebaseapp.com",
  projectId: "ytblite1",
  storageBucket: "ytblite1.appspot.com",
  messagingSenderId: "160204731098",
  appId: "1:160204731098:web:8097ff7d3df3967c32ebe3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
