import { SET_USER, INITIALIZING } from "./actionTypes";

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
