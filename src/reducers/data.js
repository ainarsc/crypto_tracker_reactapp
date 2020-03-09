import { combineReducers } from "redux";

import {
  FETCH_INIT,
  INVALIDATE,
  FETCH_SUCCESS,
  FETCH_FAIL,
  SELECT_COIN,
  SELECT_CURRENCY,
  SELECT_TIME,
  SELECT_NEWS,
  LIGHT_MODE,
  DARK_MODE,
  SELECT_COINS
} from "../actions/actionTypes";

const appSettings = (state = { darkMode: true }, event) => {
  switch (event.type) {
    case LIGHT_MODE:
      return {
        ...state,
        darkMode: false
      };
    case DARK_MODE:
      return {
        ...state,
        darkMode: true
      };
    default:
      return state;
  }
};

const preferences = (
  state = {
    crypto: "BTC",
    currency: "USD",
    newsArticles: 8,
    timePeriod: 30,
    cryptoList: ["BTC", "ETH", "XRP", "BCH", "BSV", "LTC"]
  },
  event
) => {
  switch (event.type) {
    case SELECT_COIN:
      return {
        ...state,
        crypto: event.payload
      };
    case SELECT_CURRENCY:
      return {
        ...state,
        currency: event.payload
      };
    case SELECT_TIME:
      return {
        ...state,
        timePeriod: event.payload
      };
    case SELECT_NEWS:
      return {
        ...state,
        newsArticles: event.payload
      };
    case SELECT_COINS:
      return {
        ...state,
        cryptosList: event.payload
      };
    default:
      return state;
  }
};

const apiData = (
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

const dataTypes = (state = {}, event) => {
  switch (event.type) {
    case INVALIDATE:
    case FETCH_SUCCESS:
    case FETCH_INIT:
      return {
        ...state,
        [event.dataType]: apiData(state[event.dataType], event)
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  appSettings,
  preferences,
  dataTypes
});

export default rootReducer;
