import firebaseContext from "./FirebaseContext";
import { useContext } from "react";

export const useFirebase = () => {
  const firebase = useContext(firebaseContext);
  return firebase;
};
