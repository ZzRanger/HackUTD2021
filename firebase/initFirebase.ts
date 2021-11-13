import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const clientCredentials = {
    apiKey: "AIzaSyB9jEgB2KsBX76TXCexBAJ1ed_fcoGH44c",
    authDomain: "utdlostandfon.firebaseapp.com",
    projectId: "utdlostandfon",
    storageBucket: "utdlostandfon.appspot.com",
    messagingSenderId: "413370178088",
    appId: "1:413370178088:web:ebe208f91c7fed9574f31d",
    measurementId: "G-RPGLZ2VF4Y"
};

export default function initFirebase() {
    if (!firebase.apps.length) {
        firebase.initializeApp(clientCredentials);
    }
}