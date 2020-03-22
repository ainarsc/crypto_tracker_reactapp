import { SET_USER } from "./actionTypes";

export const receiveCurrentUser = user => {
  return {
    type: SET_USER,
    payload: user
  };
};
