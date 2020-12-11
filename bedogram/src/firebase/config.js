
import  firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyA-pWxO4CFYF0weYBDObQ7331meEcD3k-I",
    authDomain: "bedo-gram.firebaseapp.com",
    projectId: "bedo-gram",
    storageBucket: "bedo-gram.appspot.com",
    messagingSenderId: "326257638340",
    appId: "1:326257638340:web:6ed73e84c78894d3854291"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage,projectFirestore,timestamp};