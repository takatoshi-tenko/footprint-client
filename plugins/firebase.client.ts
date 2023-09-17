import { initializeApp } from "firebase/app";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
//import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
//import { getStorage, connectStorageEmulator } from "firebase/storage";
import { getAuth, connectAuthEmulator } from "firebase/auth";

import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin(() => {
  const firebaseConfig = {
    apiKey: "AIzaSyBnoan4C_eRWUVwu9-ZyW9vaa_BafK0Ad0",
    authDomain: "feootprint.firebaseapp.com",
    projectId: "feootprint",
    storageBucket: "feootprint.appspot.com",
    messagingSenderId: "124048423816",
    appId: "1:124048423816:web:1ab8e7c35312341fa0d83d",
    measurementId: "G-P9171LBLSK"
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
