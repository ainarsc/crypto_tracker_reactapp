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
} from "../../utils/cleanupData";
import _ from "lodash";

export const fetchInit = dataCategory => {
  return {
    type: FETCH_INIT,
    dataCategory
  };
};

export const receiveData = (dataCategory, data) => {
  return {
    type: FETCH_SUCCESS,
    dataCategory,
    payload: data,
    receivedAt: Date.now
  };
};
export const fetchFailure = (dataCategory, error) => {
  return {
    type: FETCH_FAIL,
    dataCategory,
    payload: error
  };
};
export const invalidateData = dataCategory => {
  return {
    type: INVALIDATE,
    dataCategory
  };
};

const shouldFetch = (state, dataCategory) => {
  let category = state.apiData[dataCategory];
  // return true;
  if (dataCategory === "HISTORY") {
    return true;
  } else {
    if (_.isEmpty(category.data)) {
      return true;
    } else if (category.isFetching) {
      return false;
    } else {
      return category.didInvalidate;
    }
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

    try {
      const result = await axios(url); //return: [instance].data
      let processedData;
      if (dataCategory === "FULL_DATA") {
        processedData = cleanupFullData(result.data, keysToPick);
      } else if (dataCategory === "NEWS") {
        processedData = cleanupNewsData(result.data, keysToPick);
      } else if (dataCategory === "HISTORY") {
        processedData = cleanupHistoryData(result.data, crypto);
      }

      dispatch(receiveData(dataCategory, processedData));
    } catch (error) {
      dispatch(fetchFailure(dataCategory, error));
    }
  } else {
    return Promise.resolve();
  }
};
