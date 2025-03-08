import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyC6wfx38GuLuvjFjpGtPBUc5oTdx8qpy10",
    authDomain: "first-project-f63b1.firebaseapp.com",
    projectId: "first-project-f63b1",
    storageBucket: "first-project-f63b1.firebasestorage.app",
    messagingSenderId: "165830226825",
    appId: "1:165830226825:web:2bee06fc60def54f09e758"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {db, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, provider, signInWithPopup, onAuthStateChanged };

