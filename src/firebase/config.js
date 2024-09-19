import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBshCV7DAoHfUUexGF-eslenVVBS_JiOP8",
  authDomain: "nextrend-1f27c.firebaseapp.com",
  projectId: "nextrend-1f27c",
  storageBucket: "nextrend-1f27c.appspot.com",
  messagingSenderId: "244981271960",
  appId: "1:244981271960:web:ebd426568b7d305f376fed",
  measurementId: "G-K8D4GYSZEZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
