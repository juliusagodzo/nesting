import firebase from "firebase";

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBvWrzT39_MmnA9lc6gfuZM4mLlKQaZM6U",
  authDomain: "nesting-91561.firebaseapp.com",
  databaseURL: "https://nesting-91561-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "nesting-91561",
  storageBucket: "nesting-91561.appspot.com",
  messagingSenderId: "755976400377",
  appId: "1:755976400377:web:7d92c51ad93d6516646128",
  measurementId: "G-5KZSWBDR2T"
};

export default function firebaseClient() {
  if (!firebase.apps.length) {
    firebase.initializeApp(FIREBASE_CONFIG);
  }
}
