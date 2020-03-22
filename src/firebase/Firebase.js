import firebase from "firebase/app";
import firestore from "firebase/firestore";
import auth from "firebase/auth";

const config = {
  apiKey: "AIzaSyC6TbnCBOeAbD_Mw4jkB3LLnh6juT458w0",
  authDomain: "crypto-tracker-8b878.firebaseapp.com",
  databaseURL: "https://crypto-tracker-8b878.firebaseio.com",
  projectId: "crypto-tracker-8b878",
  storageBucket: "crypto-tracker-8b878.appspot.com",
  messagingSenderId: "340449761143",
  appId: "1:340449761143:web:f06bc3ab139e58a0297372",
  measurementId: "G-183VBCNHJJ"
};

// const app = !firebase.apps.length
//   ? firebase.initializeApp(config)
//   : firebase.app();

const firebaseServices = firebase.initializeApp(config);
const userAuth = firebaseServices.auth();

// userAuth.onAuthStateChanged(user => {
//   if (user) {
//     console.log(user);
//   } else {
//     console.log("foo");
//   }
// });

export const createUser = (email, password) => {
  userAuth.createUserWithEmailAndPassword(email, password);
  console.log("User Created");
};

export const signIn = async (email, password) => {
  await userAuth.signInWithEmailAndPassword(email, password);
  console.log("Sign in completed");
};
export const signOut = () => {
  userAuth.signOut();
  console.log("User signed out");
};
export const resetPassword = email => {
  userAuth.sendPasswordResetEmail(email);
};
export const updatePassword = password => {
  userAuth.currentUser.updatePassword(password);
};

export const getCurrentUser = () => {};

export default firebaseServices;
