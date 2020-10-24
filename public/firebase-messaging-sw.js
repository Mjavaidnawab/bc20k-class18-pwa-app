importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyB-QFt5Q1dsEb4JG4uSX7MJVI44vmdSNeQ",
    authDomain: "javaidnotify.firebaseapp.com",
    databaseURL: "https://javaidnotify.firebaseio.com",
    projectId: "javaidnotify",
    storageBucket: "javaidnotify.appspot.com",
    messagingSenderId: "823489287389",
    appId: "1:823489287389:web:18ad67c17caeaff3277734",
    measurementId: "G-WQ7ECF39TP"
  };
firebase.initializeApp(firebaseConfig);
firebase.messaging();