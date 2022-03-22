import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCK-qF0LS1baEflrFhzj4QZ_IszcrcrSKE",
    authDomain: "crwn-db-d702f.firebaseapp.com",
    projectId: "crwn-db-d702f",
    storageBucket: "crwn-db-d702f.appspot.com",
    messagingSenderId: "216618982349",
    appId: "1:216618982349:web:0b8609d5ecbce447a0c284",
    measurementId: "G-KELK4FBQD0"
  };


firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
