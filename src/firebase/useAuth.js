import { useEffect } from "react";
import { useFirebase } from "./useFirebase";

export const useAuth = userAction => {
  const firebase = useFirebase();

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        userAction(user);
        console.log("[AUTH]: User Signed In");
      } else {
        console.log("[AUTH]: No User");
      }
    });
    return () => unsubscribe;
  }, [firebase, userAction]);
};
