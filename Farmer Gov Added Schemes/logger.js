// logger.js

import { db } from "./firebase.js";
import { addDoc, collection, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

/**
 * Logs an action to the console and optionally to Firestore.
 * @param {string} message - The message to log.
 * @param {string} userEmail - The user performing the action (optional).
 * @param {boolean} storeInFirestore - Whether to store this log in Firestore.
 */
export async function logAction(message, userEmail = "anonymous", storeInFirestore = true) {
  const timestamp = new Date().toISOString();
  console.log(`[LOG] ${timestamp} - ${userEmail}: ${message}`);

  if (storeInFirestore) {
    try {
      await addDoc(collection(db, "logs"), {
        message,
        userEmail,
        timestamp: serverTimestamp()
      });
    } catch (err) {
      console.error("Failed to log to Firestore:", err.message);
    }
  }
}
