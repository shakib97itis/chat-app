import { useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../../services/firebase";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: SOLVE THE UNEXPECTED BEHAVIOR OF THE AUTH CONTEXT
    let unsubscribe = () => {};

    (async () => {
      await setPersistence(auth, browserLocalPersistence);
      unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
        setUser(firebaseUser); // may be null if not signed in
        setLoading(false); // set loading to false after checking auth state
      });
    })();

    return () => unsubscribe();
  }, []);

  const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth);

  if (loading) return <div>Loading...</div>;

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
