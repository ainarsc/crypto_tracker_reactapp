import {
  FETCH_INIT,
  FETCH_SUCCESS,
  INVALIDATE,
  FETCH_FAIL
} from "./actionTypes";
import axios from "axios";
import { processHistoryData, cleanseDataProto } from "../utils/cleanseData";

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
  currency = "",
  keysToPick = []
) => async dispatch => {
  //Init fetch, the API call is starting
  dispatch(fetchInit(dataType));

  try {
    const result = await axios(url); //API data

    const cleansed = cleanseDataProto(result.data, currency, keysToPick);

    //Store data
    dispatch(receiveData(dataType, cleansed)); //Store data in the state
  } catch (error) {
    dispatch(fetchFailure(dataType, error));
  }
};

export const fetchHistoryData = (
  crypto,
  url,
  currency = "USD",
  keysToPick
) => async dispatch => {
  const dataType = `HISTORY_${crypto}`;
  dispatch(fetchInit(dataType));
  try {
    const result = await axios(url);
    const processed = processHistoryData(
      result.data.Data,
      currency,
      keysToPick
    );
    dispatch(receiveData(dataType, processed));
  } catch (error) {
    dispatch(fetchFailure(dataType, error));
  }
};
