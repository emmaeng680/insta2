// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnc18beEgf3n-QO3TK4LhvpL7P922yz_Y",
  authDomain: "insta2-c32dd.firebaseapp.com",
  projectId: "insta2-c32dd",
  storageBucket: "insta2-c32dd.appspot.com",
  messagingSenderId: "212267411705",
  appId: "1:212267411705:web:99b93a40195d8b3db09a28"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage()

export {app,db,storage}