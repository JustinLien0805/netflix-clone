import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBk11Ny8p1h7SSPaM85vfefs4AEe7J8_XU",
  authDomain: "netlix-clone-dc931.firebaseapp.com",
  projectId: "netlix-clone-dc931",
  storageBucket: "netlix-clone-dc931.appspot.com",
  messagingSenderId: "361726457035",
  appId: "1:361726457035:web:2c60951cd4ec89559bd74e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
