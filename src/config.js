import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBFFlZpxQurkU2euw1Qy5YUM8Vkk0G_zbM",
    authDomain: "linkedin-684b7.firebaseapp.com",
    projectId: "linkedin-684b7",
    storageBucket: "linkedin-684b7.appspot.com",
    messagingSenderId: "262503073579",
    appId: "1:262503073579:web:5d43eb2de0af266aa2276e",
    measurementId: "G-E01B5T8MYG"
  };


const app = initializeApp(firebaseConfig);
// console.log(app);
const db = getFirestore(app);
// console.log(db);
const auth = getAuth(app);


export { db , auth , app };