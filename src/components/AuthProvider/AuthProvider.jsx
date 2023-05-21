import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../Firebase/firebase.config";
export const AuthContext = createContext(null);

// sign up with google
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const googleprovider = new GoogleAuthProvider();
  const handlegooglesignin = () => {
    signInWithPopup(auth, googleprovider)
      .then((result) => {
        const user = result.user;
        setLoading(true);
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //   register with email and password
  const registeruser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loginuser) => {
      setUser(loginuser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  //   signout

  const logout = () => {
    return signOut(auth);
  };

  // login with email and password

  const loginuser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authinfo = {
    handlegooglesignin,
    registeruser,
    user,
    logout,
    loginuser,
    loading,
  };
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
