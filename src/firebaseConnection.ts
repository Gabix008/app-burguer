import {  initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAGAW7t5zBT1iLOaAv0jBGUTqTR1vrDiPE",
    authDomain: "app-burguer-3ad4e.firebaseapp.com",
    projectId: "app-burguer-3ad4e",
    storageBucket: "app-burguer-3ad4e.appspot.com",
    messagingSenderId: "661618392291",
    appId: "1:661618392291:web:5b0783a1519c22897999d6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage= getStorage(app);
export { db, auth, storage };