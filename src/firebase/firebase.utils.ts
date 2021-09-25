import { initializeApp } from "firebase/app";
import { ICollection, IITems } from "../redux/shop/shop.interfaces";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  User,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  QuerySnapshot,
  DocumentData,
} from "firebase/firestore";

import { ICollectionMap } from "../redux/shop/shop.interfaces";
import { string } from "yargs";
import { IUser } from "../redux/user/user.interaces";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBkWU71TjSFdxdykPr_CqaHY1SVdNmxf48",

  authDomain: "crwn-db-8eb61.firebaseapp.com",

  projectId: "crwn-db-8eb61",

  storageBucket: "crwn-db-8eb61.appspot.com",

  messagingSenderId: "764329870619",

  appId: "1:764329870619:web:3253a5615301c580673fbe",

  measurementId: "G-7TGNJRQH8H",
};

export const createUserProfileDocument = async (userAuth: User) => {
  if (!userAuth) return;

  console.log(userAuth.uid);
  const userRef = doc(firestore, `users/${userAuth.uid}`);

  const snapShot = await getDoc(userRef);
  console.log(snapShot);

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        name: displayName,
        email: email,
        date: createdAt,
      });
    } catch (error) {
      console.log(`error creating user`);
    }
  }
  return userRef;
};

export const convertCollectionsSnapshotToMap = (
  collections: QuerySnapshot<DocumentData>
): ICollection[] => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data() as ICollection;

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection;
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const auth = getAuth();
export const firestore = getFirestore();

export const googleProvider: GoogleAuthProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ params: "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
