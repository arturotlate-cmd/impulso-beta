// auth.js
import { auth } from "./firebase.js";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const provider = new GoogleAuthProvider();

/* =========================
   LOGIN GOOGLE
========================= */
export async function loginWithGoogle() {
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error("Error en login:", error);
  }
}

/* =========================
   LOGOUT
========================= */
export async function logoutUser() {
  await signOut(auth);
}

/* =========================
   OBSERVER GLOBAL
========================= */
export function observeAuth(callback) {
  onAuthStateChanged(auth, user => {
    callback(user);
  });
}





