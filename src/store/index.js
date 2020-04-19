import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducers";
import { persistStore } from "redux-persist";

const middlewares = [ReduxThunk, logger];
const composedEnhancers = composeWithDevTools(
  applyMiddleware(...middlewares)
  //Any other enhancers go here
);

export const store = createStore(rootReducer, composedEnhancers);
export const persistor = persistStore(store);
