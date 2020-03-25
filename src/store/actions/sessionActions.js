import { SET_USER, INIT_SESSION, NO_USER, SET_ERROR } from "./actionTypes";
// import { signIn } from "../../firebase";

export const initSession = () => {
  return {
    type: INIT_SESSION
  };
};
export const setSession = user => {
  return {
    type: SET_USER,
    payload: user
  };
};

export const noSession = () => {
  return {
    type: NO_USER
  };
};

export const setError = () => {
  return {
    type: SET_ERROR
  };
};

export const signInAction = (email, password) => dispatch => {};
