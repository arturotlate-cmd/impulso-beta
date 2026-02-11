import { auth } from "./firebase.js";
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } 
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const provider = new GoogleAuthProvider();

export function login() {
  signInWithPopup(auth, provider);
}

export function logout() {
  signOut(auth);
}

export function protectPage() {
  onAuthStateChanged(auth, user => {
    if (!user) {
      window.location.href = "index.html";
    }
  });
}

export function observeUser(callback) {
  onAuthStateChanged(auth, user => {
    callback(user);
  });
}
