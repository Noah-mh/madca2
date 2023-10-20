import { firebaseapp, db } from "../firebase";
import { doc, updateDoc, setDoc } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  updateEmail,
  updatePassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";

const auth = getAuth(firebaseapp);
const provider = new GoogleAuthProvider();

export const createUser = async (auth, email, password, username) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await setUserDocument(db, userCredential.user, username);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const setUserDocument = async (db, userinfo, username) => {
  try {
    await setDoc(doc(db, "userData", userinfo.uid), {
      username: username,
      subscriptions: [],
      budget: "500",
    });
  } catch (error) {
    throw error;
  }
};

export const updateUserDocument = async (user, newUsername) => {
  const docRef = doc(db, "userData", user.uid);
  await updateDoc(docRef, {
    username: newUsername,
  });
};

export const updateUserEmail = async (email) => {
  await updateEmail(auth.currentUser, email);
};

export const updateUserPassword = async (password) => {
  await updatePassword(auth.currentUser, password);
};

export const signInUser = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const firebaseSignInWithGoogle = () => {};
