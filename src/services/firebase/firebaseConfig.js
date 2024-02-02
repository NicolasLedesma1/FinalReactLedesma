import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDeH4LyR9ipkBQMZNsF09iirGY-YOZt7lo",
  authDomain: "pokecuadros.firebaseapp.com",
  projectId: "pokecuadros",
  storageBucket: "pokecuadros.appspot.com",
  messagingSenderId: "805358408248",
  appId: "1:805358408248:web:da0ac5421dc86c6165cccd"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)