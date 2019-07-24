import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCRhtUXKQS_kUb6WKCo1oMoSZ_VawCVEPo",
    authDomain: "crwn-db-alfredo.firebaseapp.com",
    databaseURL: "https://crwn-db-alfredo.firebaseio.com",
    projectId: "crwn-db-alfredo",
    storageBucket: "",
    messagingSenderId: "1007519380874",
    appId: "1:1007519380874:web:c2a65087bb5e678f"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;