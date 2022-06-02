import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCnAW6MK8AIoZvkmX25qFr7EJmaQeCtcLI",
    authDomain: "brewedandyou-bfd8a.firebaseapp.com",
    projectId: "brewedandyou-bfd8a",
    storageBucket: "brewedandyou-bfd8a.appspot.com",
    messagingSenderId: "105629434700",
    appId: "1:105629434700:web:ac8f6d4a0bed8e5dfc05e9",
    measurementId: "G-KNGLNNB1HW"
};



const app = initializeApp(firebaseConfig);

export  const db = getFirestore(app)

export const auth = getAuth(app);