import {
  FETCH_INIT,
  FETCH_SUCCESS,
  INVALIDATE,
  FETCH_FAIL,
} from "./actionTypes";
import { MARKET_DATA, HISTORY, NEWS, HISTORY_H } from "../constants";
import axios from "axios";
import isEmpty from "lodash/isEmpty";
import config from "../../api/config";

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
  const { data, lastUpdated } = state.apiData[dataCategory];

  //Check api data conditions
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

  if (dataCategory === HISTORY) {
    const { crypto } = state.apiPreferences,
      historyExpiry = config.history.timeValid;
    return needToFetch(data[crypto], lastUpdated, historyExpiry);
  } else if (dataCategory === HISTORY_H) {
    const { crypto } = state.apiPreferences,
      historyHourlyExpiry = config.historyHourly.timeValid;
    return needToFetch(data[crypto], lastUpdated, historyHourlyExpiry);
  } else if (dataCategory === MARKET_DATA) {
    const marketExpiry = config.marketData.timeValid;
    return needToFetch(data, lastUpdated, marketExpiry);
  } else if (dataCategory === NEWS) {
    const newsExpiry = config.news.timeValid;
    return needToFetch(data, lastUpdated, newsExpiry);
  } else {
    console.log("[shouldFetch]: INCORRECT ARGUMENT PASSED");
    return false;
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
