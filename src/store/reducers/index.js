import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import apiData from "./apiData";
import appPreferences from "./appPreferences";
import apiPreferences from "./apiPreferences";
import session from "./session";
import cryptoReducer from "./cryptoReducer";

const apiReducerConfig = {
  key: "apiData",
  storage: storage,
  blacklist: ["MARKET_DATA"],
};

const rootReducer = combineReducers({
  apiData: persistReducer(apiReducerConfig, apiData),
  appPreferences,
  apiPreferences,
  session,
  cryptoReducer,
});

export default rootReducer;
