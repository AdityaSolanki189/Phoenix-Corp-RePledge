import firebase from "firebase/compat/app"; //using compat in the new versions is mandatory!
import "firebase/compat/firestore";
import "firebase/compat/auth";

import {initializeApp} from "firebase/app";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBpWhhTAcF4EOKRAeNfmQTv01Od-bE2PL8",
    authDomain: "repledge-phoenix-corp.firebaseapp.com",
    projectId: "repledge-phoenix-corp",
    storageBucket: "repledge-phoenix-corp.appspot.com",
    messagingSenderId: "562164010812",
    appId: "1:562164010812:web:acc4071ec637e641771839"
};

// firebase.initializeApp(firebaseConfig);
const firebaseApp = initializeApp(firebaseConfig);

// const auth = firebase.auth();
const auth = getAuth(firebaseApp);
const db = getFirestore();

export {auth, db, onAuthStateChanged};