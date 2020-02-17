import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";
import logger from "redux-logger";

import rootReducer from "./reducers";

const initialState = {};

export default function configureStore(preloadedState = initialState) {
  const middlewares = [thunk, logger];

  const composedEnhancers = composeWithDevTools(
    applyMiddleware(...middlewares)
    //Any other enhancers go here
  );

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
}
