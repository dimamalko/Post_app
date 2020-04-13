import 'firebase/auth';
import 'firebase/firestore';
import firebase from 'firebase/app';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyB5knwXGMmOgNBoVnVeFh24OORivbSDBCo',
  authDomain: 'tanks-1e820.firebaseapp.com',
  databaseURL: 'https://tanks-1e820.firebaseio.com',
  projectId: 'tanks-1e820',
  storageBucket: 'tanks-1e820.appspot.com',
  messagingSenderId: '992126710011',
  appId: '1:992126710011:web:17a66221690f24e184405e',
  measurementId: 'G-18JNT4Z7YS'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
