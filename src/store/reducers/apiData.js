import { combineReducers } from "redux";

import {
  FETCH_INIT,
  INVALIDATE,
  FETCH_SUCCESS,
  FETCH_FAIL,
} from "../actions/actionTypes";

const cryptoReducer = (state, action) => {
  switch (action.type) {
    case FETCH_INIT:
      return {
        ...state,
        isFetching: true,
        isError: false,
        didInvalidate: false,
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isError: false,
        didInvalidate: false,
        data: {
          ...state.data,
          ...action.payload,
        },
        lastUpdated: action.receivedAt,
      };
    case FETCH_FAIL:
      return {
        ...state,
        isFetching: false,
        isError: true,
        didInvalidate: false,
        data: action.payload,
      };
    case INVALIDATE:
      return {
        ...state,
        didInvalidate: true,
      };
    default:
      return state;
  }
};

const apiData = (
  state = {
    FULL_DATA: {
      isFetching: false,
      isError: false,
      didInvalidate: false,
      lastUpdated: "",
      data: {},
    },
    HISTORY: {
      isFetching: false,
      isError: false,
      didInvalidate: false,
      lastUpdated: "",
      data: {},
    },
    NEWS: {
      isFetching: false,
      isError: false,
      didInvalidate: false,
      lastUpdated: "",
      data: {},
    },
  },
  action
) => {
  switch (action.type) {
    case INVALIDATE:
    case FETCH_SUCCESS:
    case FETCH_INIT:
      return {
        ...state,
        [action.dataCategory]: cryptoReducer(
          state[action.dataCategory],
          action
        ),
      };
    default:
      return state;
  }
};

export default apiData;
