import { useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import AuthContext from "./AuthContext";
import { updateProfile } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db, auth } from "../../services/firebase";

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsubscribe;

    const initializeAuth = async () => {
      const handleAuthStateChange = async (firebaseUser) => {
        if (firebaseUser) {
          try {
            // 03. Get additional user data from Firestore
            const userDoc = await getDoc(doc(db, "users", firebaseUser.uid));
            const userData = userDoc.exists() ? userDoc.data() : null;

            // 04. Merge Firebase user with Firestore user data
            setCurrentUser({
              ...firebaseUser,
              ...userData,
            });
          } catch (error) {
            // Fallback to just auth data if Firestore fails
            console.error("Error fetching user data:", error);
            setCurrentUser(firebaseUser);
          }
        } else {
          // User is signed out
          setCurrentUser(null);
        }
        setLoading(false);
      };

      try {
        // 01. Set persistence
        await setPersistence(auth, browserLocalPersistence);
        // 02. Set up auth state listener
        unsubscribe = onAuthStateChanged(auth, handleAuthStateChange);
      } catch (error) {
        console.error("Error initializing auth:", error);
        setLoading(false);
      }
    };

    initializeAuth();

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);

  /**
   * Sign up a new user with email, password, and name.
   * This function creates a new user in Firebase Authentication,
   * updates the user's profile with the provided name, and saves
   * the user data in Firestore.
   * @param {string} email
   * @param {string} password
   * @param {string} name
   * @returns {Promise<User>}
   */
  const signup = async (email, password, name) => {
    try {
      setLoading(true);

      // Create auth user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      // Update user profile with display name
      const user = userCredential.user;
      await updateProfile(user, { displayName: name });

      // Prepare user data for Firestore
      const userData = {
        uid: user.uid,
        email: user.email,
        displayName: name,
        photoURL: user.photoURL || "https://example.com/default-avatar.png", // Default avatar URL
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      // Create firestore document for the user
      const userDocRef = doc(db, "users", user.uid);
      await setDoc(userDocRef, userData);
      // 4. Update local state (will also be handled by onAuthStateChanged)
      return userCredential.user;
    } catch (error) {
      console.error("Error signing up:", error);
      throw error; // Re-throw the error to handle it in the component
    } finally {
      setLoading(false);
    }
  };

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const loginWithGoogle = () => {
    // Implement Google login logic here
    // This is a placeholder for future implementation

    console.log("Google login not implemented yet");
  };

  const logout = () => signOut(auth);

  const value = {
    user: currentUser,
    loading,
    signup,
    login,
    logout,
    loginWithGoogle,
  };

  if (loading) return <div>Loading...</div>;
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
