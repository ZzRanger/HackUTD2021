
// Initialize firebase
import firebase, { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

export function initializeFirebase() {

        initializeApp(firebaseConfig);
}



export async function firestoreTest() {
    const db = getFirestore();
    console.log("TEST");

    // Add a new document in collection "cities"
    await setDoc(doc(db, "users", "LA"), {
        name: "Los Angeles",
        state: "CA",
        country: "USA"
    });
}
