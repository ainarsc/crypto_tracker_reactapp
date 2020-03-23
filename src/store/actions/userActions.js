import { SET_USER, INITIALIZING, NO_USER } from "./actionTypes";

export const initUser = () => {
  return {
    type: INITIALIZING
  };
};
export const receiveCurrentUser = user => {
  return {
    type: SET_USER,
    payload: user
  };
};

export const noUserSignedIn = () => {
  return {
    type: NO_USER
  };
};
