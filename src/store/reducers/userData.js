import { SET_USER, INITIALIZING } from "../actions/actionTypes";

const _initialState = {
  loading: false,
  displayName: null,
  email: null,
  uid: null
};

const userData = (state = _initialState, action) => {
  switch (action.type) {
    case INITIALIZING:
      return {
        ...state,
        loading: true
      };
    case SET_USER:
      return {
        ...state,
        loading: false,
        displayName: action.payload.displayName,
        email: action.payload.email,
        uid: action.payload.uid
      };

    default:
      return state;
  }
};

export default userData;
