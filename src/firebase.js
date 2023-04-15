import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAa0bgmpTAUxcfOE9nh37quhUUuzjGsAHY",
  authDomain: "chat-ae8df.firebaseapp.com",
  projectId: "chat-ae8df",
  storageBucket: "chat-ae8df.appspot.com",
  messagingSenderId: "561854716776",
  appId: "1:561854716776:web:16e059659c5b8a817694dd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
