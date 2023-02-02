import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtrO32qlxwMi5KHK6rCqJaCpWOm51g2cA",
  authDomain: "moneywise-f6b90.firebaseapp.com",
  projectId: "moneywise-f6b90",
  storageBucket: "moneywise-f6b90.appspot.com",
  messagingSenderId: "515221396273",
  appId: "1:515221396273:web:30f0536a30f0d44cdeae10",
};

const firebaseapp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseapp);

export { firebaseapp, db };
