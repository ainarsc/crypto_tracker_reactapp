import combineReducers from "redux";

import {
  FETCH_INIT,
  INVALIDATE,
  SELECT_COIN,
  RECEIVE_DATA
} from "../actions/actionTypes";

const selectCoin = (state = "BTC", event) => {
  switch (event.type) {
    case SELECT_COIN:
      return event.coin;
    default:
      return state;
  }
};

const data = (
  state = {
    isFetching: false,
    didInvalidate: false,
    data: {}
  },
  event
) => {
  switch (event.type) {
    case INVALIDATE:
      return {
        ...state,
        didInvalidate: true
      };
    case FETCH_INIT:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      };

    case RECEIVE_DATA:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        data: event.payload,
        lastUpdated: event.receivedAt
      };
    default:
      return state;
  }
};

const dataByCategory = (state = {}, event) => {
  switch (event.type) {
    case INVALIDATE:
    case RECEIVE_DATA:
    case FETCH_INIT:
      return {
        ...state,
        [event.dataType]: data(state[event.dataType], event)
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  selectCoin,
  dataByCategory
});

export default rootReducer;
