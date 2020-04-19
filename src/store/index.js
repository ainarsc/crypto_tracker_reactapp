import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "apiData",
  storage: storage,
  whitelist: ["apiData"], // which reducer want to store
};
// const pReducer = persistReducer(persistConfig, rootReducer);
const preloadedState = {};
const middlewares = [ReduxThunk, logger];
const composedEnhancers = composeWithDevTools(
  applyMiddleware(...middlewares)
  //Any other enhancers go here
);

//store
const store = createStore(rootReducer, preloadedState, composedEnhancers);
// const persistor = persistStore(store);

export { store };
