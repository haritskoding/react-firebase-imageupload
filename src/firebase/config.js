import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA9RJK-fqaLo05LaIa2Hy4XqnuBq9gWvwM",
    authDomain: "teguh-firegram.firebaseapp.com",
    databaseURL: "https://teguh-firegram.firebaseio.com",
    projectId: "teguh-firegram",
    storageBucket: "teguh-firegram.appspot.com",
    messagingSenderId: "753582435651",
    appId: "1:753582435651:web:f62335130e23a9db5a93f6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };