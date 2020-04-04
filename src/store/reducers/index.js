import { combineReducers } from "redux";
import apiData from "./apiData";
import appPreferences from "./appPreferences";
import apiPreferences from "./apiPreferences";
import session from "./session";
import treeMap from "./treeMap";
import marketSummary from "./marketSummary";

const rootReducer = combineReducers({
  apiData,
  appPreferences,
  apiPreferences,
  session,
  treeMap,
  marketSummary,
});

export default rootReducer;
