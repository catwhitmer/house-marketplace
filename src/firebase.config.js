import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6x4ztw1Z2eofo4MvsxbojwbpgFJu21f4",
  authDomain: "house-marketplace-app-5504c.firebaseapp.com",
  projectId: "house-marketplace-app-5504c",
  storageBucket: "house-marketplace-app-5504c.appspot.com",
  messagingSenderId: "1024073367550",
  appId: "1:1024073367550:web:4a790f8a19687411348aaf"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();