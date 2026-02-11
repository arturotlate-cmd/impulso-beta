import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDOk9rqAaa8YUey1Likcyv7dtw9OrGDza0",
  authDomain: "impulso-beta.firebaseapp.com",
  projectId: "impulso-beta",
  storageBucket: "impulso-beta.firebasestorage.app",
  messagingSenderId: "284940276982",
  appId: "1:284940276982:web:d7686b136b26546c5888d7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export function login() {
  return signInWithPopup(auth, provider);
}

export function logout() {
  return signOut(auth);
}

export function observeAuth(callback) {
  onAuthStateChanged(auth, callback);
}

export { auth };


