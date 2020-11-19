import firebase from 'firebase/app';
import 'firebase/database';

const config={
    apiKey: "AIzaSyCcKxEqcliA7B04G5CpAofr5vQZfhrsM78",
    authDomain: "alumnosreactfirebase.firebaseapp.com",
    databaseURL: "https://alumnosreactfirebase.firebaseio.com",
    projectId: "alumnosreactfirebase",
    storageBucket: "alumnosreactfirebase.appspot.com",
    messagingSenderId: "140636690843",
    appId: "1:140636690843:web:cf0c45df2ca9b5493ea93e",
    measurementId: "G-8RM2C8EB1Z"
}

const fb = !firebase.apps.lenght ? firebase.initializeApp(config):firebase.app();
export default fb;
