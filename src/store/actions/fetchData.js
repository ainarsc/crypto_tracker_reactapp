import {
  FETCH_INIT,
  FETCH_SUCCESS,
  INVALIDATE,
  FETCH_FAIL,
} from "./actionTypes";
import { MARKET_DATA, HISTORY, NEWS } from "../constants";
import axios from "axios";
import isEmpty from "lodash/isEmpty";

//ACTION CREATORS
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

const shouldFetch = (state, dataCategory) => {
  const category = state.apiData[dataCategory];
  const preferences = state.apiPreferences;
  const needToFetch = (data, receivedAt, time) => {
    if (isEmpty(data)) {
      return true;
    } else {
      const minute = 1000 * 60;
      const currentTime = Date.now();
      const elapsedTime = currentTime - receivedAt;

      return elapsedTime > time * minute;
    }
  };

  switch (dataCategory) {
    case HISTORY:
      const { crypto } = preferences;
      const { data, lastUpdated } = category;
      return needToFetch(data[crypto], lastUpdated, 60);
    case MARKET_DATA:
      return needToFetch(category.data, category.lastUpdated, 15);
    case NEWS:
      return needToFetch(category.data, category.lastUpdated, 60);
    default:
      break;
  }
};

export const fetchAction = (url, dataType, cleanupFn, params) => async (
  dispatch,
  getState
) => {
  if (shouldFetch(getState(), dataType)) {
    try {
      //Let the store know data is fetching
      dispatch(fetchInit(dataType));
      const result = await axios(url);
      //Process data with according cleanup fn before dispatching to the store
      const processed = cleanupFn(result.data, params);
      //Dispatch pre processed data to the store
      dispatch(receiveData(dataType, processed));
    } catch (error) {
      dispatch(fetchFailure(dataType, error));
    }
  }
};
