import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth, browserLocalPersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCu76NGN3bu9eguOMxn8YgIjCW4m3asHXc",
  authDomain: "react-ecommerce-a6772.firebaseapp.com",
  projectId: "react-ecommerce-a6772",
  storageBucket: "react-ecommerce-a6772.appspot.com",
  messagingSenderId: "1062423580044",
  appId: "1:1062423580044:web:01d453b02ee7759fccdaa9"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
auth.setPersistence(browserLocalPersistence);