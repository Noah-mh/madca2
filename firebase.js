import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9mDDpyr-TU6nWMrN6giIRDiKg10izWsc",
  authDomain: "mad-assignment-b1c4e.firebaseapp.com",
  projectId: "mad-assignment-b1c4e",
  storageBucket: "mad-assignment-b1c4e.appspot.com",
  messagingSenderId: "444639331747",
  appId: "1:444639331747:web:5bae66ea3243e8c0048616",
  measurementId: "G-VJFCN9J2CL",
};

const firebaseapp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseapp);

export {firebaseapp, db} ;
