// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCB54J0c9gzH5LZA6UMqKA0je72wB870wo",
  authDomain: "broslunas-b19fb.firebaseapp.com",
  projectId: "broslunas-b19fb",
  storageBucket: "broslunas-b19fb.appspot.com",
  messagingSenderId: "777240534262",
  appId: "1:777240534262:web:b3c3ec33ea912dfca0a0d7",
  measurementId: "G-QXEDG343KE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)