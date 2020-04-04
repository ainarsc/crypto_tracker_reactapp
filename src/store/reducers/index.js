import { combineReducers } from "redux";
import apiData from "./apiData";
import appPreferences from "./appPreferences";
import apiPreferences from "./apiPreferences";
import session from "./session";
import cryptoReducer from "./cryptoReducer";

const rootReducer = combineReducers({
  apiData,
  appPreferences,
  apiPreferences,
  session,
  cryptoReducer,
});

export default rootReducer;
