import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import ReduxThunk from "redux-thunk";
import logger from "redux-logger";

import rootReducer from "./reducers";

const initialState = {};

export default function configureStore(preloadedState = initialState) {
  const middlewares = [ReduxThunk, logger];

  const composedEnhancers = composeWithDevTools(
    applyMiddleware(...middlewares)
    //Any other enhancers go here
  );

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  // const url = "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD";
  // store.dispatch(fetchData("PRICE", url));
  return store;
}
