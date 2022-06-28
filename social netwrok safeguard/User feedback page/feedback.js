
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
  
// Refernece URL Info collections
let URLInfo = firebase.database().ref("User_feedback");

// Listen for a submit
document.querySelector(".submission-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
 
  //   Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  


  saveURLInfo(name, email, message);

  document.querySelector(".submission-form").reset();
}

// Save infos to Firebase
function saveURLInfo(name, email, message){
  let newURLInfo = URLInfo.push();

  newURLInfo.set({
    name: name,
    email: email,
    message: message,
   
  });
 
  window.alert("message recieved");

 
}


