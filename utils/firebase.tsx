import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {
  getAuth, createUserWithEmailAndPassword, 
  onAuthStateChanged, signOut, 
  signInWithEmailAndPassword
} from "firebase/auth";
import { useState, useEffect } from "react";


const firebaseConfig = {
  apiKey: "AIzaSyC0N-QRdO3kUuK6wzynk23KDsIB05sO7uo",
  authDomain: "reusable-components-51947.firebaseapp.com",
  projectId: "reusable-components-51947",
  storageBucket: "reusable-components-51947.appspot.com",
  messagingSenderId: "149056739011",
  appId: "1:149056739011:web:9715c17da88da14a1cb476"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const firestore = getFirestore();
const auth = getAuth();

export function signup(email:string, password:string) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email:string, password:string) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

//Custom hook

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user as any));
    return unsub;
  }, [])

  return currentUser;
}