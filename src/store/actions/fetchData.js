import {
  FETCH_INIT,
  FETCH_SUCCESS,
  INVALIDATE,
  FETCH_FAIL,
} from "./actionTypes";
import { MARKET_DATA, HISTORY, NEWS } from "../constants";
import axios from "axios";
import {
  cleanupFullData,
  cleanupNewsData,
  cleanupHistoryData,
} from "../../utils/cleanupData";
import isEmpty from "lodash/isEmpty";

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
  if (isEmpty(data)) {
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

const fetchData = (url, dataKey) => async (dispatch, getState) => {
  if (shouldFetch(getState(), dataKey)) {
    try {
      dispatch(fetchInit(dataKey));
      const result = await axios(url);
      return result.data;
    } catch (error) {
      return error;
    }
  }
};

export const fetchHistory_ = (url, crypto) => async (dispatch) => {
  const localData = JSON.parse(localStorage.getItem(crypto));
  if (localData) {
    dispatch(receiveData(HISTORY, localData));
  } else {
    const result = fetchData(url, HISTORY);
    if (result && result.message) {
      dispatch(fetchFailure(HISTORY, result.message));
    } else {
      const processed = cleanupHistoryData(result, crypto);
      localStorage.setItem(crypto, JSON.stringify(processed));
      dispatch(receiveData(HISTORY, processed));
    }
  }
};

export const fetchHistory = (url, crypto) => async (dispatch, getState) => {
  if (shouldFetch(getState(), HISTORY)) {
    dispatch(fetchInit(HISTORY)); //1 DISPATCH INIT ACTION
    const localData = JSON.parse(localStorage.getItem(crypto)); //2 RETRIEVE FROM LOCAL STORE

    if (localData) {
      dispatch(receiveData(HISTORY, localData));
    } else {
      try {
        const result = await axios(url);
        const processed = cleanupHistoryData(result.data, crypto);
        localStorage.setItem(crypto, JSON.stringify(processed));
        dispatch(receiveData(HISTORY, processed));
      } catch (error) {
        dispatch(fetchFailure(HISTORY, error));
      }
    }
  }
};

export const fetchMarketData = (url, keysToPick) => async (
  dispatch,
  getState
) => {
  if (shouldFetch(getState(), MARKET_DATA)) {
    dispatch(fetchInit(MARKET_DATA)); //1 DISPATCH INIT ACTION
    const localData = JSON.parse(localStorage.getItem(MARKET_DATA)); //2 RETRIEVE FROM LOCAL STORE
    if (localData) {
      dispatch(receiveData(MARKET_DATA, localData));
    } else {
      try {
        const result = await axios(url);
        let processed = cleanupFullData(result.data, keysToPick);
        localStorage.setItem(MARKET_DATA, JSON.stringify(processed));
        dispatch(receiveData(MARKET_DATA, processed));
      } catch (error) {
        dispatch(fetchFailure(MARKET_DATA, error));
      }
    }
  }
};

export const fetchNews = (url, keysToPick) => async (dispatch, getState) => {
  if (shouldFetch(getState(), NEWS)) {
    dispatch(fetchInit(NEWS)); //1 DISPATCH INIT ACTION
    const localData = JSON.parse(localStorage.getItem(NEWS)); //2 RETRIEVE FROM LOCAL STORE
    if (localData) {
      dispatch(receiveData(NEWS, localData));
    } else {
      try {
        const result = await axios(url);
        let processed = cleanupNewsData(result.data, keysToPick);
        localStorage.setItem(NEWS, JSON.stringify(processed));
        dispatch(receiveData(NEWS, processed));
      } catch (error) {
        dispatch(fetchFailure(NEWS, error));
      }
    }
  }
};
