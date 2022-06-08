import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {firebaseConfig} from './config'   // this file is in .gitignore
import {getAuth} from 'firebase/auth'



//initializing firebase
initializeApp(firebaseConfig);

// initializing firestore
const db = getFirestore(); // For Using Database

//initializing firebase auth
const auth = getAuth()

export { db, auth };