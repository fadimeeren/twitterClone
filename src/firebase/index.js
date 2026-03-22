import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrTTtoo7aARAoh0LPDAu4aEMe5MvaT4as",
  authDomain: "twitter-5faef.firebaseapp.com",
  projectId: "twitter-5faef",
  storageBucket: "twitter-5faef.firebasestorage.app",
  messagingSenderId: "81150118422",
  appId: "1:81150118422:web:a0b05c75bc9d38d3124337",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth referansını al
export const auth = getAuth(app);

// google sağlayıcısının kurulumunu yap
export const provider = new GoogleAuthProvider();
