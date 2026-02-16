import { auth } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = async () => {
  return await signInWithPopup(auth, new GoogleAuthProvider());
};

export const doSignOut = () => {
  return signOut(auth);
};

export const doSendPasswordResetEmail = async (auth, email) => {
  return await sendPasswordResetEmail(auth, email);
};

//   return (
//     <div>
//       <input
//         placeholder="Email..."
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         placeholder="Password..."
//         type="password"
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={signIn}> Sign In </button>

//       <button onClick={signInWithGoogle}> Sign In with Google </button>

//       <button onClick={logout}> Log Out </button>
//     </div>
//   );
//
