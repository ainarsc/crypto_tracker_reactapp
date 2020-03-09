import { SELECT_CURRENCY } from "./actionTypes";

export const setCurrency = currency => {
  return {
    type: SELECT_CURRENCY,
    payload: currency
  };
};
