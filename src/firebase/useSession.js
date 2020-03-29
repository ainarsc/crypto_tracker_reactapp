import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFirebase } from "./useFirebase";

import {
  setSession,
  setError,
  sessionLoaded
} from "../store/actions/sessionActions";

export const useSession = () => {
  const history = useHistory();
  const firebase = useFirebase();
  const dispatch = useDispatch();

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((user, error) => {
      if (user) {
        dispatch(setSession(user));
        console.log(`[Session]: <${user.email}> has been signed in`);
      } else if (error) {
        dispatch(setError());
        console.log(`[Session]: ${error.message}`);
      } else {
        dispatch(sessionLoaded());
        console.log(
          `[Session]: No active session detected/Sign out successful`
        );
      }
    });

    return () => listener();
  }, [firebase, history, dispatch]);
};
