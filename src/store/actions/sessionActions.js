import {
  SET_USER,
  INIT_SESSION,
  CLEAR_SESSION,
  SET_ERROR
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

export const setError = () => {
  return {
    type: SET_ERROR
  };
};

export const signInAction = (email, password) => dispatch => {};
