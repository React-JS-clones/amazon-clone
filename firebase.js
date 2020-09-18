// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDF9ZaVLBl_XjGpsHZ61J7-kHNRT23ftto",
    authDomain: "clone-24e77.firebaseapp.com",
    databaseURL: "https://clone-24e77.firebaseio.com",
    projectId: "clone-24e77",
    storageBucket: "clone-24e77.appspot.com",
    messagingSenderId: "697866644760",
    appId: "1:697866644760:web:c7c6eeea7c054f2574026d",
    measurementId: "G-229CWQ9X8X"
  };
const firebaseApp  = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};
