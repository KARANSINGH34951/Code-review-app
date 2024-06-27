// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "code-review-app-279ad.firebaseapp.com",
  projectId: "code-review-app-279ad",
  storageBucket: "code-review-app-279ad.appspot.com",
  messagingSenderId: "245851188122",
  appId: "1:245851188122:web:62ef088dcbe97fa23d2823",
  measurementId: "G-7VZXX9DX9R"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);