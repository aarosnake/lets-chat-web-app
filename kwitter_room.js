var firebaseConfig = {
    apiKey: "AIzaSyD4nrwdXjn5mSEd3z5uCcLo30pBIQgjh4o",
    authDomain: "lets-cat-app.firebaseapp.com",
    databaseURL: "https://lets-cat-app-default-rtdb.firebaseio.com",
    projectId: "lets-cat-app",
    storageBucket: "lets-cat-app.appspot.com",
    messagingSenderId: "821932917617",
    appId: "1:821932917617:web:fc6d2384f50e60b4056cd0"
  };

  firebase.initializeApp(firebaseConfig);

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;


  });});}
  getData();
