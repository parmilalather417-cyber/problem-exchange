import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
  arrayUnion
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAZxpWzPf_27Yn43hey8bu9HPdv52Klfzc",
  authDomain: "problem-exchange-99fe2.firebaseapp.com",
  projectId: "problem-exchange-99fe2",
  storageBucket: "problem-exchange-99fe2.firebasestorage.app",
  messagingSenderId: "242667364336",
  appId: "1:242667364336:web:63d1c34c33cda6cf7a4735"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

window.db = db;
window.collection = collection;
window.addDoc = addDoc;
window.getDocs = getDocs;
window.doc = doc;
window.deleteDoc = deleteDoc;
window.updateDoc = updateDoc;
window.arrayUnion = arrayUnion;