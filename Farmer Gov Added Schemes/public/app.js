// public/app.js
import { auth, db } from "../firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

// Logging Function
function logAction(action) {
  console.log(`[LOG]: ${new Date().toISOString()} - ${action}`);
}

// Register
async function registerUser(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    logAction("User Registered: " + email);
  } catch (error) {
    logAction("Registration Failed: " + error.message);
  }
}

// Login
async function loginUser(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    logAction("User Logged In: " + email);
  } catch (error) {
    logAction("Login Failed: " + error.message);
  }
}
