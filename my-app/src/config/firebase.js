import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCIFR5cRHZrjRiv00iAenE6P_FrL2DCBTA",
  authDomain: "wings-8dae0.firebaseapp.com",
  projectId: "wings-8dae0",
  storageBucket: "wings-8dae0.firebasestorage.app",
  messagingSenderId: "113565914263",
  appId: "1:113565914263:web:1dc71446189466fb98c5d2",
  measurementId: "G-QL0QHLJR52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
export const googleProvider = new GoogleAuthProvider();