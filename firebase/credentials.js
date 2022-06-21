// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {
//   // apiKey: process.env.apiKey,
//   apiKey: "AIzaSyAaeNVlhLmnQS9SeIOTb2rQUQxrQwXjkW0",
//   authDomain: process.env.authDomain,
//   projectId: process.env.projectId,
//   storageBucket: process.env.storageBucket,
//   messagingSenderId: process.env.messagingSenderId,
//   appId: process.env.appId,
//   measurementId: process.env.measurementId
// };
const firebaseConfig = {
  // apiKey: process.env.apiKey,
  apiKey: "AIzaSyAaeNVlhLmnQS9SeIOTb2rQUQxrQwXjkW0",
  authDomain: "glorious-vs.firebaseapp.com",
  projectId: "glorious-vs",
  storageBucket: "glorious-vs.appspot.com",
  messagingSenderId: "947463447717",
  appId: "1:947463447717:web:928ff4284452d20c17194c",
  measurementId: "G-S1B38DEEQ9"
};

let firebaseApp

if (!getApps.length) {
  firebaseApp = initializeApp(firebaseConfig);
}
export default firebaseApp
// const analytics = getAnalytics(app);