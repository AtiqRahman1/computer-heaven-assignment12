// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID,
// };

const firebaseConfig = {
    apiKey: "AIzaSyAEgDj_-EZESayUUUYn3syO-mAyHPLqFBM",
    authDomain: "computer-heaven-f5ad5.firebaseapp.com",
    projectId: "computer-heaven-f5ad5",
    storageBucket: "computer-heaven-f5ad5.appspot.com",
    messagingSenderId: "752988257245",
    appId: "1:752988257245:web:ca0fd06d77402e26ff1434"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;