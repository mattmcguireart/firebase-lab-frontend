import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDn18UwK6QRyvUZCMy0XS58b0K5RmaSvjc",
  authDomain: "fir-lab-c2c28.firebaseapp.com",
  projectId: "fir-lab-c2c28",
  storageBucket: "fir-lab-c2c28.appspot.com",
  messagingSenderId: "656511577966",
  appId: "1:656511577966:web:cefad11a9a8977b65f9b7f",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const authProvider = new firebase.auth.GoogleAuthProvider();
export default firebase;

export function signInWithGoogle(): void {
  firebase.auth().signInWithPopup(authProvider);
}
export function signOut(): void {
  firebase.auth().signOut();
}
