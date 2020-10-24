import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const messaging = firebase.messaging();


export function initNotification() {
    Notification.requestPermission().then((permission) => {
        console.log(permission)
        if (permission === "granted")  //if permission of notification is granted then give the token to device
        {
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log("TOKEN");
                    console.log(currentToken);

                } else {
                    // Show permission request.
                    console.log('No registration token available. Request permission to generate one.');

                }
            }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
            });



        }
    })

}