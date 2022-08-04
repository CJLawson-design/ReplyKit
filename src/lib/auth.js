import { useState, useEffect, useContext, createContext } from "react";
import firebase from "./firebase";

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

  // testing
  console.log(user);

  // handle raw user json data
  const handleUser = (rawUser) => {
    if (rawUser) {
      const user = formatUser(rawUser);
      setLoading(false);
      setUser(user);
      return user;
    } else {
      setLoading(false);
      setUser(false);
      return false;
    }
  };

  // Sign in with Github
  const signinWithGithub = () => {
    setLoading(true);
    const provider = new firebase.auth.GithubAuthProvider();

    return firebase
      .auth()
      .signInWithPopup(provider)
      .then((response) => handleUser(response.user));
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
    signinWithGithub,
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
