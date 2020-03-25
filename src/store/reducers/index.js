import { combineReducers } from "redux";
import apiData from "./apiData";
import appPreferences from "./appPreferences";
import apiPreferences from "./apiPreferences";
import session from "./session";

const rootReducer = combineReducers({
  apiData,
  appPreferences,
  apiPreferences,
  session
});

export default rootReducer;
