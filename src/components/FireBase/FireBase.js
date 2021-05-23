import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyAxqY8fT4cBrqG1DrJV28cheB1IzhgoBcE",
  authDomain: "khorezm-food-register.firebaseapp.com",
  projectId: "khorezm-food-register",
  storageBucket: "khorezm-food-register.appspot.com",
  messagingSenderId: "522158869596",
  appId: "1:522158869596:web:d4a9e242bb22e1364caa99",
};
// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
export { auth };
export default db;
