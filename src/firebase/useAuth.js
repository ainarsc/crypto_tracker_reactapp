import { useEffect, useState } from "react";
import { useFirebase } from "./useFirebase";

export const useAuth = () => {
  const firebase = useFirebase();
  const [currentUser, setUser] = useState({});
  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
        console.log("[AUTH]: User Signed In");
        return currentUser;
      } else {
        console.log("[AUTH]: No User");
      }
    });
    return () => listener(); //By calling onauthstatechanged it returns unsubscribe, check docs
  }, [firebase, currentUser, setUser]);
};
