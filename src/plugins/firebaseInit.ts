import firebase from 'firebase';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyBamRzAUZvjdwvlxN-5tanN3qYELBVTR0E",
    authDomain: "spajam-2020.firebaseapp.com",
    databaseURL: "https://spajam-2020.firebaseio.com",
    projectId: "spajam-2020",
    storageBucket: "spajam-2020.appspot.com",
    messagingSenderId: "366531857359",
    appId: "1:366531857359:web:2b22b8178da0ff098360ba",
    measurementId: "G-Z5QXBK8TYZ"
  });
}

export default firebase;