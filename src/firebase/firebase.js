import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDPtm40fE_NUsC0os8gCmLwMbpS1aLjYs4",
  authDomain: "portfolio-6c14c.firebaseapp.com",
  databaseURL: "https://portfolio-6c14c-default-rtdb.firebaseio.com",
  projectId: "portfolio-6c14c",
  storageBucket: "portfolio-6c14c.appspot.com",
  messagingSenderId: "697144490341",
  appId: "1:697144490341:web:f00e725e5e1bd28737c98c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the firestore database
const db = getFirestore(app);

export { db };
