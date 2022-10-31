import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateNameUrl = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  const verification = () => {
    return sendEmailVerification(auth.currentUser);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("from unsubscribe", currentUser);
    });
    setLoading(false);
    return () => {
      return unsubscribe();
    };
  }, []);
  const authInfo = {
    setUser,
    user,
    loading,
    setLoading,
    createUser,
    updateNameUrl,
    verification,login
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
