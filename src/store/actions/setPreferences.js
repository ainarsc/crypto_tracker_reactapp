import { SELECT_CURRENCY, SET_CRYPTO } from "./actionTypes";

export const setCurrency = currency => {
  return {
    type: SELECT_CURRENCY,
    payload: currency
  };
};

export const setCrypto = crypto => {
  return {
    type: SET_CRYPTO,
    payload: crypto
  };
};
