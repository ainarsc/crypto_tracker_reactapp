import { combineReducers } from "redux";
import apiData from "./apiData";
import appPreferences from "./appPreferences";
import apiPreferences from "./apiPreferences";

const rootReducer = combineReducers({
  apiData,
  appPreferences,
  apiPreferences
});

export default rootReducer;
