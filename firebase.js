import firebase from 'firebase/app';
import 'firebase/database';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC9mDDpyr-TU6nWMrN6giIRDiKg10izWsc",
    authDomain: "mad-assignment-b1c4e.firebaseapp.com",
    projectId: "mad-assignment-b1c4e",
    storageBucket: "mad-assignment-b1c4e.appspot.com",
    messagingSenderId: "444639331747",
    appId: "1:444639331747:web:5bae66ea3243e8c0048616",
    measurementId: "G-VJFCN9J2CL"
  };

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export { firebase, database };
