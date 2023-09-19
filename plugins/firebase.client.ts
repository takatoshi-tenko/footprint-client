import { initializeApp } from "firebase/app";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
//import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
//import { getStorage, connectStorageEmulator } from "firebase/storage";
import { getAuth, connectAuthEmulator } from "firebase/auth";

import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin(() => {
  const firebaseConfig = {
    apiKey: "AIzaSyB-cpZT8Cy5rBZ2cZrzXI69je4c6zNOC6s",
    authDomain: "foot-life-print.firebaseapp.com",
    projectId: "foot-life-print",
    storageBucket: "foot-life-print.appspot.com",
    messagingSenderId: "600582337292",
    appId: "1:600582337292:web:f49e519b4fa1aceeaa8f29",
    measurementId: "G-JTGVBW8X7P"
  };
  
  initializeApp(firebaseConfig);

  const isEmulating = window.location.hostname === "localhost";
  if (isEmulating) {
    const auth = getAuth();
    connectAuthEmulator(auth, "http://localhost:9099");

    //const storage = getStorage();
    //connectStorageEmulator(storage, "localhost", 9199);

    //const db = getFirestore();
    //connectFirestoreEmulator(db, 'localhost', 8080);

    const functions = getFunctions();
    connectFunctionsEmulator(functions, "localhost", 5001);
  }
});
