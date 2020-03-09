import {
  SELECT_COIN,
  SELECT_CURRENCY,
  SELECT_TIME,
  SELECT_NEWS,
  SELECT_COINS
} from "./actionTypes";

export const setCurrency = currency => {
  return {
    type: SELECT_CURRENCY,
    payload: currency
  };
};
