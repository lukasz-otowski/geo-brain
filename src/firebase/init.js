import firebase from 'firebase'
import firestore from 'firebase/firestore'
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCFvb27H4LUCmSxgphcMddWNK3LsbfcDC4",
    authDomain: "geo-brain.firebaseapp.com",
    databaseURL: "https://geo-brain.firebaseio.com",
    projectId: "geo-brain",
    storageBucket: "geo-brain.appspot.com",
    messagingSenderId: "744839911679"
  };
const firebaseApp = firebase.initializeApp(config);
export default firebaseApp.firestore()