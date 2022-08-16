import { useState, useEffect, useContext, createContext } from "react";
import Router from "next/router";

import firebase from "./firebase";
import { createUser } from "./db";

// Crreate context
const authContext = createContext();

// Wrap context provider around component tree
export function AuthProvider({ children }) {
  const auth = useAuthProvider();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Custom auth hook
export const useAuth = () => {
  return useContext(authContext);
};

function useAuthProvider() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // handle raw user json data
  const handleUser = async (rawUser) => {
    if (rawUser) {
      const user = await formatUser(rawUser);

      createUser(user.uid, user);
      setUser(user);

      setLoading(false);
      return user;
    } else {
      setLoading(false);
      setUser(false);
      return false;
    }
  };

  // Sign in with Google
  const signinWithGoogle = (redirect) => {
    setLoading(true);
    const provider = new firebase.auth.GoogleAuthProvider();

    return firebase
      .auth()
      .signInWithPopup(provider)
      .then((response) => {
        handleUser(response.user);

        if (redirect) {
          Router.push(redirect);
        }
      });
  };

  // Signout
  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => handleUser(false));
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(handleUser);
    return () => unsubscribe();
  }, []);

  return {
    user,
    loading,
    signinWithGoogle,
    signout,
  };
}

// Format user json data when handleUser() function is hit
const formatUser = (user) => {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
  };
};
