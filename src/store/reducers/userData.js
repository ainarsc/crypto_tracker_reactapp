import { SET_USER, INITIALIZING, NO_USER } from "../actions/actionTypes";

const _initialState = {
  loading: false,
  userSet: false,
  data: {
    displayName: "",
    email: "",
    uid: ""
  }
};

const userData = (state = _initialState, action) => {
  switch (action.type) {
    case INITIALIZING:
      return {
        ...state,
        loading: true,
        userSet: false
      };
    case SET_USER:
      return {
        ...state,
        loading: false,
        userSet: true,
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
        loading: false,
        userSet: false,
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

export default userData;
