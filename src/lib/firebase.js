// Import the Firebase SDK functions you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEtirWu5UswwCL2CHmCoL3cuSbw0HJBxY",
  authDomain: "sample-firebase-2ai-app-adc45.firebaseapp.com",
  projectId: "sample-firebase-2ai-app-adc45",
  storageBucket: "sample-firebase-2ai-app-adc45.firebasestorage.app",
  messagingSenderId: "248180175750",
  appId: "1:248180175750:web:6318db3d7675b6f7d17207",
  measurementId: "G-GGMNGVRXSB"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Analytics
const analytics = getAnalytics(app);

// Initialize Firebase services
export const auth = getAuth(app); // Authentication service
export const db = getFirestore(app); // Firestore database
export const storage = getStorage(app); // Cloud Storage

// Google Auth Provider configuration
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});
