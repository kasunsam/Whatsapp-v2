import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDiLTfnuSdN88twX4pW_5mr6wixo0SvKnY',
  authDomain: 'whatsapp-new2.firebaseapp.com',
  projectId: 'whatsapp-new2',
  storageBucket: 'whatsapp-new2.appspot.com',
  messagingSenderId: '142142081212',
  appId: '1:142142081212:web:a7843c4d7eb72986c2e8b9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
