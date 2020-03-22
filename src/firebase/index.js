import firebaseServices, {
  signIn,
  signOut,
  createUser,
  resetPassword,
  updatePassword
} from "./Firebase";
import firebaseContext from "./FirebaseContext";
import { useFirebase } from "./useFirebase";
import { useSession } from "./useSession";
import { useAuth } from "./useAuth";

export { signIn };
export { signOut };
export { createUser };
export { resetPassword };
export { updatePassword };
export { useFirebase };
export { useSession };
export { firebaseContext };
export { useAuth };
export default firebaseServices;
