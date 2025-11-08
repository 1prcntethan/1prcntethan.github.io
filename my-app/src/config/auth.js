import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import { useState } from "react";
import { googleProvider } from "../config/firebase";
import { useAuth } from "./auth-context.jsx";

export function Auth() {
  const { signIn, signInWithGoogle, logout } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <input
        placeholder="Email..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Password..."
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signIn}> Sign In </button>

      <button onClick={signInWithGoogle}> Sign In with Google </button>

      <button onClick={logout}> Log Out </button>
    </div>
  );
};
