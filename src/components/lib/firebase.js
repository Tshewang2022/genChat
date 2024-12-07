import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyDQC5HKQPHzYt2ez25COkeJ2URF7874jAQ",
    authDomain: "genchat-13afb.firebaseapp.com",
    projectId: "genchat-13afb",
    storageBucket: "genchat-13afb.firebasestorage.app",
    messagingSenderId: "859234147388",
    appId: "1:859234147388:web:e376c9f938740a1a76f739"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();