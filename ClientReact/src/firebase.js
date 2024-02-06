// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernblog-db0a6.firebaseapp.com",
  projectId: "mernblog-db0a6",
  storageBucket: "mernblog-db0a6.appspot.com",
  messagingSenderId: "491621098588",
  appId: "1:491621098588:web:2109a99b5f368cabbeb299",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
