import { auth } from "./firebase.js";
import {
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const provider = new GoogleAuthProvider();

/* =========================
   LOGIN GOOGLE (REDIRECT)
========================= */
export async function loginWithGoogle() {
  await signInWithRedirect(auth, provider);
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

  // Detecta si viene de redirect
  getRedirectResult(auth)
    .then(() => {})
    .catch((error) => {
      console.error("Redirect error:", error);
    });

  onAuthStateChanged(auth, user => {
    callback(user);
  });
}










