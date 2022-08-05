import firebase from "firebase/app";
import "firebase/auth";
import "firebase/functions";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3KSSzEho0G1VSzTnkGyk6Q55aO0AAvlE",
  authDomain: "fast-feedback-demo-2a590.firebaseapp.com",
  projectId: "fast-feedback-demo-2a590",
  storageBucket: "fast-feedback-demo-2a590.appspot.com",
  messagingSenderId: "619010013258",
  appId: "1:619010013258:web:763c5d049a1739fcfe8eb3",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
