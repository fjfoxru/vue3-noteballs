// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyCX3Z9yPNUkxy5-Ik_mCYyuuzmKzoH7o3E",

  authDomain: "vue3-noteballs-6e22f.firebaseapp.com",

  projectId: "vue3-noteballs-6e22f",

  storageBucket: "vue3-noteballs-6e22f.appspot.com",
  messagingSenderId: "146787077472",

  appId: "1:146787077472:web:ca848f9b58d3eee0096205"

};


const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export {
  db,
  auth
}