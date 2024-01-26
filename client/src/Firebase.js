// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "rupesh-s-blog.firebaseapp.com",
  projectId: "rupesh-s-blog",
  storageBucket: "rupesh-s-blog.appspot.com",
  messagingSenderId: "600440535577",
  appId: "1:600440535577:web:7e3c4cd1afe5e0787b8888",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
