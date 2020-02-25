import {
  FETCH_INIT,
  FETCH_SUCCESS,
  INVALIDATE,
  FETCH_FAIL
} from "./actionTypes";
import axios from "axios";
import { cleanseDataProto } from "../utils/cleanseData";

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
export const fetchFailure = (dataType, error) => {
  return {
    type: FETCH_FAIL,
    dataType,
    payload: error
  };
};
export const invalidateData = dataType => {
  return {
    type: INVALIDATE,
    dataType
  };
};

export const fetchData = (
  dataType,
  url,
  currency,
  keysToPick
) => async dispatch => {
  //Init fetch, the API call is starting
  dispatch(fetchInit(dataType));

  try {
    const result = await axios(url); //API data
    // Should process the data here
    const cleansed = cleanseDataProto(result.data, currency, keysToPick);

    //Store data
    dispatch(receiveData(dataType, cleansed)); //Store data in the state
  } catch (error) {
    console.log(error);
    dispatch(fetchFailure(dataType, error));
  }
};
