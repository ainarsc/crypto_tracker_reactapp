import {
  SELECT_COIN,
  SELECT_CURRENCY,
  SELECT_TIME,
  SELECT_NEWS,
  SELECT_COINS
} from "../actions/actionTypes";

const apiPreferences = (
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

export default apiPreferences;
