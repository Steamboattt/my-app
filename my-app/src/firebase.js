import { getAuth, onAuthStateChanged } from '@firebase/auth'
import { initializeApp } from 'firebase/app'
import { useState, useEffect, useContext, createContext } from 'react'
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore';
import React, { Component }  from 'react';

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyCPUP4z1FMzVagDWwHZcCi-FbZGdu-ZpGs",
  authDomain: "gamification-3e68a.firebaseapp.com",
  projectId: "gamification-3e68a",
  storageBucket: "gamification-3e68a.appspot.com",
  messagingSenderId: "976281872104",
  appId: "1:976281872104:web:3045fde3109726b41dcb5d",
  measurementId: "G-5GDXEB8J94"
})

export const AuthContext = createContext()

export const AuthContextProvider = props => {
  const [user, setUser] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), setUser, setError)
    return () => unsubscribe()
  }, [])
  return <AuthContext.Provider value={{ user, error }} {...props} />
}

export const useAuthState = () => {
  const auth = useContext(AuthContext)
  return { ...auth, isAuthenticated: auth.user != null }
}


const firestore = getFirestore(firebaseApp);
export default firestore; 

export const FirebaseStorage = getStorage(firebaseApp);

export const storage = getStorage(firebaseApp);