// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDpI6knCCUZVr6SdpbE4ib29tuklpE3Kx0",
    authDomain: "javabuddy-55017.firebaseapp.com",
    projectId: "javabuddy-55017",
    storageBucket: "javabuddy-55017.firebasestorage.app",
    messagingSenderId: "738758918650",
    appId: "1:738758918650:web:987c94686948fa56c52443",
    measurementId: "G-JRGF4DHB6Y",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
