/* - - - - - - - - - - - - - - - - - 
   Configurations for the Firebase
- - - - - - - - - - - - - - - - - - -  */

// Firebase Configuration and Initialization

// Your web app's Firebase configuration
var  firebaseConfig = {
    apiKey: "AIzaSyD0GjHJzVFokedWGm34L4oyzLE6EJdZNp8",
    authDomain: "social-safeguard.firebaseapp.com",
    databaseURL: "https://social-safeguard-default-rtdb.firebaseio.com",
    projectId: "social-safeguard",
    storageBucket: "social-safeguard.appspot.com",
    messagingSenderId: "403460839012",
    appId: "1:403460839012:web:e0600730d343deea363171",
    measurementId: "G-GK506C693T"
  };

firebase.initializeApp(firebaseConfig);

// Make Auth and Firestore References
const auth = firebase.auth();
const db = firebase.firestore();

