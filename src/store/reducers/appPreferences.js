import { LIGHT_MODE, DARK_MODE } from "../actions/actionTypes";

const appPreferences = (state = { darkMode: true }, event) => {
  switch (event.type) {
    case LIGHT_MODE:
      return {
        ...state,
        darkMode: false
      };
    case DARK_MODE:
      return {
        ...state,
        darkMode: true
      };
    default:
      return state;
  }
};

export default appPreferences;
