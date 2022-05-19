// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: "glorious-vs.firebaseapp.com",
  projectId: "glorious-vs",
  storageBucket: "glorious-vs.appspot.com",
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: proccess.env.APPID,
  measurementId: process.env.MEASUREMENTID
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp
// const analytics = getAnalytics(app);