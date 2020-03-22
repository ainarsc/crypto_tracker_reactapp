import { combineReducers } from "redux";
import apiData from "./apiData";
import appPreferences from "./appPreferences";
import apiPreferences from "./apiPreferences";
import userData from "./userData";

const rootReducer = combineReducers({
  apiData,
  appPreferences,
  apiPreferences,
  userData
});

export default rootReducer;
