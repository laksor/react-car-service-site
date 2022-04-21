// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUbnrxIKyhxPfbfFW_Hho8D2lvSp_BWvY",
  authDomain: "car-service-db558.firebaseapp.com",
  projectId: "car-service-db558",
  storageBucket: "car-service-db558.appspot.com",
  messagingSenderId: "838496174223",
  appId: "1:838496174223:web:fd1c608242734dd55770fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;