import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// Keys
import api from "./config";

const firebaseConfig = {
  apiKey: api.apiKey,
  authDomain: api.authDomain,
  databaseURL: api.databaseURL,
  projectId: api.projectId,
  storageBucket: api.storageBucket,
  messagingSenderId: api.messagingSenderId,
  appId: api.appId,
  measurementId: api.measurementId
};

/* eslint-disable no-return-await */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // Find user in the database
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // Get the user data
  const snapShot = await userRef.get();

  // If user is not registered
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  // Request a batch request
  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });


  return await batch.commit();
};

export const convertCollectionSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const convertDepartmentSnapshotToMap = (categories) => {
  const transformedCategories = categories.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id
  }));

  return transformedCategories;
};

export const getCurrentUser = () => new Promise((resolve, reject) => {
  const unsubscribe = auth.onAuthStateChanged((userAuth) => {
    unsubscribe();

    resolve(userAuth);
  }, reject);
});

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export default firebase;
