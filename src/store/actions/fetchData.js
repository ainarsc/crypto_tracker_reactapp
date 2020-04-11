import {
  FETCH_INIT,
  FETCH_SUCCESS,
  INVALIDATE,
  FETCH_FAIL,
} from "./actionTypes";
import axios from "axios";
import {
  cleanupFullData,
  cleanupNewsData,
  cleanupHistoryData,
} from "../../utils/cleanupData";
import _ from "lodash";

export const fetchInit = (dataCategory) => {
  return {
    type: FETCH_INIT,
    dataCategory,
  };
};
export const receiveData = (dataCategory, data) => {
  return {
    type: FETCH_SUCCESS,
    dataCategory,
    payload: data,
    receivedAt: Date.now(),
  };
};
export const fetchFailure = (dataCategory, error) => {
  return {
    type: FETCH_FAIL,
    dataCategory,
    payload: error,
  };
};
export const invalidateData = (dataCategory) => {
  return {
    type: INVALIDATE,
    dataCategory,
  };
};

const needToFetch = (data, receivedAt, time) => {
  const isEmpty = _.isEmpty(data);
  if (isEmpty) {
    return true;
  } else {
    const minute = 1000 * 60;
    const currentTime = Date.now();
    const elapsedTime = currentTime - receivedAt;

    return elapsedTime > time * minute;
  }
};

const shouldFetch = (state, dataCategory) => {
  const category = state.apiData[dataCategory];
  const preferences = state.apiPreferences;

  const HISTORY = "HISTORY";
  const FULL_DATA = "FULL_DATA";
  const NEWS = "NEWS";

  switch (dataCategory) {
    case HISTORY:
      const { crypto } = preferences;
      const { data, lastUpdated } = category;
      return needToFetch(data[crypto], lastUpdated, 60);
    case FULL_DATA:
      return needToFetch(category.data, category.lastUpdated, 15);
    case NEWS:
      return needToFetch(category.data, category.lastUpdated, 60);
    default:
      break;
  }
};

export const fetchData = (
  dataCategory,
  url,
  crypto,
  currency,
  keysToPick = []
) => async (dispatch, getState) => {
  if (shouldFetch(getState(), dataCategory)) {
    dispatch(fetchInit(dataCategory));

    if (dataCategory === "HISTORY") {
      const stored = JSON.parse(localStorage.getItem(crypto));
      if (stored) {
        dispatch(receiveData(dataCategory, stored));
        console.log(
          "[fetchData]: Retrieving price history data form loc storage"
        );
      } else {
        const result = await axios(url);
        let processedData;
        try {
          processedData = cleanupHistoryData(result.data, crypto);
          localStorage.setItem(crypto, JSON.stringify(processedData));
          dispatch(receiveData(dataCategory, processedData));
        } catch (error) {
          dispatch(fetchFailure(dataCategory, error));
        }
      }
    } else {
      try {
        const result = await axios(url);
        let processedData;
        if (dataCategory === "FULL_DATA") {
          processedData = cleanupFullData(result.data, keysToPick);
        } else if (dataCategory === "NEWS") {
          processedData = cleanupNewsData(result.data, keysToPick);
        }
        dispatch(receiveData(dataCategory, processedData));
      } catch (error) {
        dispatch(fetchFailure(dataCategory, error));
      }
    }
  }
};
