// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDOk9rqAaa8YUey1Likcyv7dtw9OrGDza0",
  authDomain: "impulso-beta.firebaseapp.com",
  projectId: "impulso-beta",
  storageBucket: "impulso-beta.firebasestorage.app",
  messagingSenderId: "284940276982",
  appId: "1:284940276982:web:d7686b136b26546c5888d7"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);


