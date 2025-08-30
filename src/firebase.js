import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // ✅ add this

const firebaseConfig = {
  apiKey: "AIzaSyB8HRNZcbUx8l8LI_I0NLv0SA6M18zTt_A",
  authDomain: "shraddhainstitute-8a3e2.firebaseapp.com",
  projectId: "shraddhainstitute-8a3e2",
  storageBucket: "shraddhainstitute-8a3e2.firebasestorage.app",
  messagingSenderId: "593017943268",
  appId: "1:593017943268:web:ca3f1e412c630137ec28f1",
  measurementId: "G-3Q0ZNMQJY8"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app); // ✅ export storage



