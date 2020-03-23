import { useEffect } from "react";
import { useFirebase } from "./useFirebase";

export const useAuth = (initAction, receiveAction) => {
  const firebase = useFirebase();

  useEffect(() => {
    initAction();
    const listener = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        receiveAction(user);
        console.log("[AUTH]: User Signed In");
      } else {
        console.log("[AUTH]: No User");
      }
    });
    return () => listener(); //By calling onauthstatechanged it returns unsubscribe, check docs
  }, [firebase, initAction, receiveAction]);
};
