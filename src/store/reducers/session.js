import {
  SET_USER,
  INIT_SESSION,
  NO_USER,
  SET_ERROR
} from "../actions/actionTypes";

const _initialState = {
  fetching: true,
  isAuthenticated: false,
  isError: false,
  data: {
    displayName: "",
    email: "",
    uid: ""
  }
};

const session = (state = _initialState, action) => {
  switch (action.type) {
    case INIT_SESSION:
      return {
        ...state,
        fetching: true,
        isAuthenticated: false,
        isError: false
      };
    case SET_USER:
      return {
        ...state,
        fetching: false,
        isAuthenticated: true,
        isError: false,
        data: {
          ...state.data,
          displayName: action.payload.displayName,
          email: action.payload.email,
          uid: action.payload.uid
        }
      };
    case NO_USER:
      return {
        ...state,
        fetching: false,
        isAuthenticated: false,
        isError: false,
        data: {
          ...state.data,
          displayName: "",
          email: "",
          uid: ""
        }
      };
    case SET_ERROR:
      return {
        ...state,
        fetching: false,
        isAuthenticated: false,
        isError: true,
        data: {
          ...state.data,
          displayName: "",
          email: "",
          uid: ""
        }
      };
    default:
      return state;
  }
};

export default session;
