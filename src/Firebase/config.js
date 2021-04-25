 import  firebase from 'firebase/app';
 import 'firebase/storage';
 import 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyBjfspQdJEvuxoaWgfySxjJPuhPAwSohdo",
    authDomain: "wallpaper-firegram.firebaseapp.com",
    projectId: "wallpaper-firegram",
    storageBucket: "wallpaper-firegram.appspot.com",
    messagingSenderId: "1053594445553",
    appId: "1:1053594445553:web:2380c9e1b1eed111b66b50",
    measurementId: "G-F349RZSX9B"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  


  const projectStorage=firebase.storage();
  const projectFirestore=firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage,projectFirestore,timestamp};