// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
  
   // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();