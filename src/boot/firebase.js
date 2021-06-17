import * as firebase from 'firebase/app'; 
import "firebase/auth";
import "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyAJvo5e-ydtnInJQEGvr52qeAh0Cs2R4a0",
    authDomain: "qhizo-b1c56.firebaseapp.com",
    databaseURL: "https://qhizo-b1c56.firebaseio.com",
    projectId: "qhizo-b1c56",
    storageBucket: "qhizo-b1c56.appspot.com",
    messagingSenderId: "59989191116",
    appId: "1:59989191116:web:c6ec0f801dc8a1d3989569",
    measurementId: "G-QDY1C4HJPQ"
  };
 let firebaseapp=firebase.initializeApp(firebaseConfig);
 let auth =firebaseapp.auth();
 let db = firebaseapp.database();
  
 export {auth,db}