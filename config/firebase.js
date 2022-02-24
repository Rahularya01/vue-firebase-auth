import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Firebase cofig 
const config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID,
};

console.log(config);

// init firebase
initializeApp(config);

// init firebase auth
const auth = getAuth();

export { auth };