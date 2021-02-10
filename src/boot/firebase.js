// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";

// PUT YOUR OWN FIREBASE CONFIGURATION HERE
var firebaseConfig = {
  apiKey: `${process.env.API_KEY[0]}`,
  authDomain: `${process.env.AUTH_DOMAIN[0]}`,
  databaseURL: `${process.env.DATABASE_URL[0]}`,
  projectId: `${process.env.PROJECT_ID[0]}`,
  storageBucket: `${process.env.STORAGE_BUCKET[0]}`,
  messagingSenderId: `${process.env.MESSAGING_SENDER_ID[0]}`,
  appId: `${process.env.APP_ID[0]}`,
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAuth = firebaseApp.auth()
const firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }