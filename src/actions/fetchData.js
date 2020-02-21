import { FETCH_INIT, FETCH_SUCCESS, INVALIDATE } from "./actionTypes";
import axios from "axios";

export const fetchInit = dataType => {
  return {
    type: FETCH_INIT,
    dataType
  };
};

export const receiveData = (dataType, data) => {
  return {
    type: FETCH_SUCCESS,
    dataType,
    payload: data,
    receivedAt: Date.now
  };
};

export const invalidateData = dataType => {
  return {
    type: INVALIDATE,
    dataType
  };
};

export const fetchData = (dataType, url) => async dispatch => {
  //Init fetch, the API call is starting
  dispatch(fetchInit(dataType));

  try {
    const result = await axios(url);
    dispatch(receiveData(dataType, result.data));
  } catch (error) {
    console.log(error);
    return { error: "FOO" };
  }
};
