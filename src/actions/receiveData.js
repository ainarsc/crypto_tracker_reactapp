import RECEIVE_DATA from "./actionTypes";

export default (url, coin, data) => {
  return {
    type: RECEIVE_DATA,
    url,
    coin,
    payload: data,
    receivedAt: Date.now
  };
};
