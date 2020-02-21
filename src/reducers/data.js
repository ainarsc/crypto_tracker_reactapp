import { combineReducers } from "redux";

import {
  FETCH_INIT,
  INVALIDATE,
  SELECT_COIN,
  FETCH_SUCCESS,
  FETCH_FAIL
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
    isError: false,
    didInvalidate: false,
    data: {}
  },
  event
) => {
  switch (event.type) {
    case FETCH_INIT:
      return {
        ...state,
        isFetching: true,
        isError: false,
        didInvalidate: false
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isError: false,
        didInvalidate: false,
        data: event.payload,
        lastUpdated: event.receivedAt
      };
    case FETCH_FAIL:
      return {
        ...state,
        isFetching: false,
        isError: true,
        didInvalidate: false,
        data: event.payload
      };
    case INVALIDATE:
      return {
        ...state,
        didInvalidate: true
      };
    default:
      return state;
  }
};

const dataByCategory = (state = {}, event) => {
  switch (event.type) {
    case INVALIDATE:
    case FETCH_SUCCESS:
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
