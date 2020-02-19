import RECEIVE_DATA from "./actionTypes";

export default (dataType, data) => {
  return {
    type: RECEIVE_DATA,
    dataType,
    payload: data,
    receivedAt: Date.now
  };
};
