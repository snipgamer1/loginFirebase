import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBpCiP1O7z9MhIE68aDDQUGVSzEhs_F5vc",
  authDomain: "pruebas-df2fa.firebaseapp.com",
  projectId: "pruebas-df2fa",
  storageBucket: "pruebas-df2fa.appspot.com",
  messagingSenderId: "84750105761",
  appId: "1:84750105761:web:81812551840685eacc04e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;