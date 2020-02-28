import {
  FETCH_INIT,
  FETCH_SUCCESS,
  INVALIDATE,
  FETCH_FAIL
} from "./actionTypes";
import axios from "axios";
import {
  cleanupFullData,
  cleanupNewsData,
  cleanupHistoryData
} from "../utils/cleanupData";

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
  crypto,
  currency,
  keysToPick = []
) => async dispatch => {
  dispatch(fetchInit(dataType));

  try {
    const result = await axios(url); //return: [instance].data
    let processData;
    if (dataType === "FULL_DATA") {
      processData = cleanupFullData(result.data, keysToPick);
    } else if (dataType === "NEWS") {
      processData = cleanupNewsData(result.data, keysToPick);
    } else if (dataType === "HISTORY") {
      processData = cleanupHistoryData(result.data, crypto, currency);
    }

    dispatch(receiveData(dataType, processData));
  } catch (error) {
    dispatch(fetchFailure(dataType, error));
  }
};
