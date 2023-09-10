import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDpF9MzaH4K_IKgIgrFrmOrC90FYdUYfa0",
  authDomain: "photo-gallery-27979.firebaseapp.com",
  projectId: "photo-gallery-27979",
  storageBucket: "photo-gallery-27979.appspot.com",
  messagingSenderId: "863411226521",
  appId: "1:863411226521:web:ad3c240e8509ac40743508",
  measurementId: "G-KK8LM86P6L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);
export { auth, storage, db };