// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBj9u8qVJSHc3jUTDTKtzQ0Nao0c5ZBlLw",
    authDomain: "creative-agency-e5c04.firebaseapp.com",
    projectId: "creative-agency-e5c04",
    storageBucket: "creative-agency-e5c04.appspot.com",
    messagingSenderId: "604095824443",
    appId: "1:604095824443:web:d246e077d2567d9ace521e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;