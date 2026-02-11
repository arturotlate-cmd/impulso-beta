// auth.js
import { auth } from "./firebase.js";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const provider = new GoogleAuthProvider();

export function login() {
  signInWithPopup(auth, provider);
}

export function logout() {
  signOut(auth);
}

export function observeAuth(callback) {
  onAuthStateChanged(auth, callback);
}



