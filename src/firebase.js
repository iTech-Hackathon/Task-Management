// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDFmNCohViQx_S6yP4U8yHyBlKXu8ICVdE',
  authDomain: 'itech-pbl.firebaseapp.com',
  projectId: 'itech-pbl',
  storageBucket: 'itech-pbl.appspot.com',
  messagingSenderId: '628677464983',
  appId: '1:628677464983:web:26e4ed1a7f123e7f8d2ad2',
  measurementId: 'G-WSZL6ZXJ9R',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
