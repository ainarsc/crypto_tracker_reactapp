import { useContext, createContext } from "react";

const userContext = createContext({ user: null });

export const useSession = () => {
  const { user } = useContext(userContext);
  return user;
};