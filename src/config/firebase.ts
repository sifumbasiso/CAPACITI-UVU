import { initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';

import { getFirestore } from 'firebase/firestore';
 
const firebaseConfig = {

  apiKey: "AIzaSyBkkFF0XhNZeWuDmOfEhsgdfX1VBG7WTas",

  authDomain: "uvu-capaciti.firebaseapp.com",

  projectId: "uvu-capaciti",

  storageBucket: "uvu-capaciti.appspot.com",

  messagingSenderId: "581326886241",

  appId: "1:581326886241:web:c56de2df97e77c1ccb321d"

};
 
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
 