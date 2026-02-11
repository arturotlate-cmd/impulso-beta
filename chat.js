import { db } from "./firebase.js";
import { auth } from "./firebase.js";
import { collection, addDoc, query, orderBy, onSnapshot } 
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

if (!productId) throw new Error("Falta productId");

const messagesRef = collection(db, "products", productId, "messages");

document.getElementById("form").addEventListener("submit", async e => {
  e.preventDefault();

  await addDoc(messagesRef, {
    text: message.value,
    user: auth.currentUser.displayName,
    createdAt: new Date()
  });

  message.value = "";
});

const q = query(messagesRef, orderBy("createdAt"));

onSnapshot(q, snapshot => {
  const container = document.getElementById("messages");
  container.innerHTML = "";

  snapshot.forEach(doc => {
    const msg = doc.data();
    const div = document.createElement("div");
    div.textContent = `${msg.user}: ${msg.text}`;
    container.appendChild(div);
  });
});
