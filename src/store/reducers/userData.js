import { SET_USER } from "../actions/actionTypes";

const _initialState = {
  displayName: "",
  email: "",
  uid: ""
};

const userData = (state = _initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        displayName: action.payload.displayName,
        email: action.payload.email,
        uid: action.payload.uid
      };

    default:
      return state;
  }
};

export default userData;
