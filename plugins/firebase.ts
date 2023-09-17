// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnoan4C_eRWUVwu9-ZyW9vaa_BafK0Ad0",
  authDomain: "feootprint.firebaseapp.com",
  projectId: "feootprint",
  storageBucket: "feootprint.appspot.com",
  messagingSenderId: "124048423816",
  appId: "1:124048423816:web:1ab8e7c35312341fa0d83d",
  measurementId: "G-P9171LBLSK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);