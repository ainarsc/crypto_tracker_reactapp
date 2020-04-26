import {
  SET_USER,
  INIT_SESSION,
  CLEAR_SESSION,
  SET_ERROR,
  SESSION_LOADED,
} from "../actions/actionTypes";

const _initialState = {
  fetching: true,
  isAuthenticated: false,
  isError: false,
  errorMessage: "",
  data: {
    displayName: "",
    email: "",
    uid: "",
  },
};

const session = (state = _initialState, action) => {
  switch (action.type) {
    case INIT_SESSION:
      return {
        ...state,
        fetching: true,
        isAuthenticated: false,
        isError: false,
        data: { ...state.data },
      };
    case SET_USER:
      return {
        ...state,
        fetching: false,
        isAuthenticated: true,
        isError: false,
        errorMessage: "",
        data: {
          ...state.data,
          displayName: action.payload.displayName,
          email: action.payload.email,
          uid: action.payload.uid,
        },
      };
    case CLEAR_SESSION:
      return {
        ...state,
        fetching: false,
        isAuthenticated: false,
        isError: false,
        errorMessage: "",
        data: {
          ...state.data,
          displayName: "",
          email: "",
          uid: "",
        },
      };
    case SESSION_LOADED:
      return {
        ...state,
        fetching: false,
        data: {
          ...state.data,
        },
      };
    case SET_ERROR:
      return {
        ...state,
        fetching: false,
        isAuthenticated: false,
        isError: true,
        errorMessage: action.message,
        data: {
          ...state.data,
        },
      };
    default:
      return state;
  }
};

export default session;
