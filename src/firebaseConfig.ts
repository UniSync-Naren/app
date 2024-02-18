import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2duIgNJ2pBMH4IOB8aVANX8yUkZ2njEA",
  authDomain: "unisync-21fa0.firebaseapp.com",
  projectId: "unisync-21fa0",
  storageBucket: "unisync-21fa0.appspot.com",
  messagingSenderId: "315850888026",
  appId: "1:315850888026:web:593a043069be0b29771963",
  measurementId: "G-HZWCT0BWJG"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();