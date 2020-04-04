import {
  SELECT_HISTORY,
  SELECT_TREEMAP,
  SELECT_CHANGE,
  SELECT_VOLUME,
  SELECT_MKTSUPPLY,
} from "./actionTypes";

export const selectHistory = (time) => {
  return { type: SELECT_HISTORY, payload: time };
};

export const selectTreeMap = (category) => {
  return { type: SELECT_TREEMAP, payload: category };
};

export const selectChange = (time) => {
  return { type: SELECT_CHANGE, payload: time };
};

export const selectVolume = (time) => {
  return { type: SELECT_VOLUME, payload: time };
};

export const selectMktsupply = (type) => {
  return { type: SELECT_MKTSUPPLY, payload: type };
};
