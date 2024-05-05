import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxZVKGfIjUuw18jEY7XbLZMqvMZiJ5JaA",
  authDomain: "react-netflix-clone-c8676.firebaseapp.com",
  projectId: "react-netflix-clone-c8676",
  storageBucket: "react-netflix-clone-c8676.appspot.com",
  messagingSenderId: "601696495518",
  appId: "1:601696495518:web:82d5f1edf3876a2278d88f",
  measurementId: "G-6QQSC10QFC"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);