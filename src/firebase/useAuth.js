import { useState, useEffect } from "react";
import firebase from "./Firebase";

export const useAuth = () => {
  const [state, setState] = useState(() => {
    const user = firebase.auth().currentUser;
    return {
      initializing: !user,
      user
    };
  });

  function onChange(user) {
    setState({ initializing: false, user });
  }

  useEffect(() => {
    const unsubscribe = firebase
      .auth()
      .onAuthStateChanged(user => onChange(user));

    return () => unsubscribe;
  }, []);

  return state;
};
