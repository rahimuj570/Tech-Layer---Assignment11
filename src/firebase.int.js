// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.apiKey_REACT_APP,
  authDomain: process.env.authDomain_REACT_APP,
  projectId: process.env.projectId_REACT_APP,
  storageBucket: process.env.storageBucket_REACT_APP,
  messagingSenderId: process.env.messagingSenderId_REACT_APP,
  appId: process.env.appId_REACT_APP,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
