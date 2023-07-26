import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyB69cQRApfeYNqqNopNhHl_ZQIkmYhJo4g',
  authDomain: 'netflix-fake-clone.firebaseapp.com',
  projectId: 'netflix-fake-clone',
  storageBucket: 'netflix-fake-clone.appspot.com',
  messagingSenderId: '158807774734',
  appId: '1:158807774734:web:e7edb3355ecacdcab18e5f'
};

const firebase = Firebase.initializeApp(config);

// Cloude Firestore save one time and datas will there until be deleted.
// seedDatabase(firebase);

export { firebase };
