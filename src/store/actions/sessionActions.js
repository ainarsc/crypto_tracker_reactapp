import {
  SET_USER,
  INIT_SESSION,
  CLEAR_SESSION,
  SET_ERROR,
  SESSION_LOADED
} from "./actionTypes";
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

export const clearSession = () => {
  return {
    type: CLEAR_SESSION
  };
};

export const sessionLoaded = () => {
  return {
    type: SESSION_LOADED
  };
};

export const setError = error => {
  return {
    type: SET_ERROR,
    message: error
  };
};

export const signInAction = (email, password) => dispatch => {};
