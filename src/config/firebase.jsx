import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  // apiKey: import.meta.env.VITE_API_KEY,
  // authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  // projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  // storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  // appId: import.meta.env.VITE_FIREBASE_APP_ID,
  apiKey: 'AIzaSyAeKwwEyyPTjqpLWdiLPNGmWWFxhL3wB_U',
  authDomain: 'agarwal-kitchen.firebaseapp.com',
  projectId: 'agarwal-kitchen',
  storageBucket: 'agarwal-kitchen.appspot.com',
  messagingSenderId: '978624407515',
  appId: '1:978624407515:web:8f2ba9cf56406896b729fe',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
