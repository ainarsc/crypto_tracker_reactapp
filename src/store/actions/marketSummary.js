import {
  SELECT_MKTCAP,
  SELECT_SUPPLY,
  SELECT_CHANGE1,
  SELECT_CHANGE24,
  SELECT_VOL1,
  SELECT_VOL24,
} from "./actionTypes";

export const selectMktcap = () => {
  return {
    type: SELECT_MKTCAP,
  };
};

export const selectSupply = () => {
  return {
    type: SELECT_SUPPLY,
  };
};

export const selectChange1 = () => {
  return {
    type: SELECT_CHANGE1,
  };
};
export const selectChange24 = () => {
  return {
    type: SELECT_CHANGE24,
  };
};

export const selectVol1 = () => {
  return {
    type: SELECT_VOL1,
  };
};
export const selectVol24 = () => {
  return {
    type: SELECT_VOL24,
  };
};
