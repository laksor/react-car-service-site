// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJfXBwll8yRSh1Pa0Mvy3A9j1Bw1yNNHo",
  authDomain: "car-mama.firebaseapp.com",
  projectId: "car-mama",
  storageBucket: "car-mama.appspot.com",
  messagingSenderId: "979305634006",
  appId: "1:979305634006:web:b3ca114ef2f47c962f9177"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;