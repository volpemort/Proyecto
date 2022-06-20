// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore }from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB89zU93RzqBaLRvEM4BihIwXNu9dKjH_k",
  authDomain: "ecommerce-90223.firebaseapp.com",
  projectId: "ecommerce-90223",
  storageBucket: "ecommerce-90223.appspot.com",
  messagingSenderId: "626205545503",
  appId: "1:626205545503:web:55fc18252580ef30a6712a",
  measurementId: "G-4LVMY5SYY5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const fireDataB = getFirestore(app); 

export default fireDataB