import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { 
  getAuth,
  GoogleAuthProvider, 
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDbY8GAAyIOZ225N8qOEWzSQTJcLKuSQdw",
    authDomain: "slackclone-2cebb.firebaseapp.com",
    projectId: "slackclone-2cebb",
    storageBucket: "slackclone-2cebb.appspot.com",
    messagingSenderId: "636821727467",
    appId: "1:636821727467:web:5a0dd35f00b40eb96bb6ae"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { 
  db, 
  auth, 
  provider, 
  signInWithPopup, 
  onAuthStateChanged, 
  signOut, 
  getFirestore,
  collection
};