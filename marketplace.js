import { db } from "./firebase.js";
import { collection, getDocs } 
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("products-container");
  if (!container) return;

  const snapshot = await getDocs(collection(db, "products"));
  container.innerHTML = "";

  snapshot.forEach(doc => {
    const product = doc.data();

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${product.title}</h3>
      <p>$${product.price}</p>
      <button onclick="window.location.href='product.html?id=${doc.id}'">
        Ver
      </button>
    `;

    container.appendChild(card);
  });
});
