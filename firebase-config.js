import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

import {getStorage} from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDLkl3lYoys3HRUZIZZRR3FVuVGeiaVmAE",
  authDomain: "blog-13b2c.firebaseapp.com",
  projectId: "blog-13b2c",
  storageBucket: "blog-13b2c.appspot.com",
  messagingSenderId: "553484679768",
  appId: "1:553484679768:web:d782097c6248d33c88282d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();

export const storage=getStorage(app);
