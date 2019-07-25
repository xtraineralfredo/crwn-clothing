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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error createing user', error.message);
        }
    }

    return userRef;


}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;