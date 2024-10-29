// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// import { getAuth, signInWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  setPersistence,
  browserLocalPersistence,
  signOut,
} from "firebase/auth";
import { getDatabase, ref, set, get } from "firebase/database";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC88SWnz7cN2q83vHT10Hsntv8qAK8fuNg",
  authDomain: "education-app-215.firebaseapp.com",
  projectId: "education-app-215",
  storageBucket: "education-app-215.appspot.com",
  messagingSenderId: "1005768439358",
  appId: "1:1005768439358:web:2e62b7117a45a13cc2436f",
  measurementId: "G-SLDNM6WYT6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);
const database = getDatabase(app);
const firestore = getFirestore(app);
const provider = new GoogleAuthProvider();

setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Persistence set to LOCAL");
  })
  .catch((error) => {
    console.error("Error setting persistence:", error);
  });

function SaveUserData(user) {
  const uid = user.uid;
  const name = user.displayName;
  const email = user.email;
  const photo = user.photoURL;

  // Save additional user information to Realtime Database
  set(ref(database, "users/" + user.uid), {
    Name: name,
    Userid: uid,
    photoURL: photo,
    email: email,
    number: " ",
  });

  // Save additional user information to Firestore
  setDoc(doc(firestore, "users", user.uid), {
    Name: name,
    Userid: uid,
    photoURL: photo,
    email: email,
    number: " ",
  });
}

function GoogleSignin(event) {
  event.preventDefault();
  console.log("first");
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.

      const credential = GoogleAuthProvider.credentialFromResult(result);

      const token = credential.accessToken;

      // The signed-in user info.
      const user = result.user;

      SaveUserData(user);

      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user.email, "singned in");
  } else {
    console.log("user is not signed");
  }
});

function SignOut() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
}
export { GoogleSignin, SignOut };
