import { SELECT_MKTCAP, SELECT_SUPPLY, SELECT_VOLUME } from "./actionTypes";

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

export const selectVolume = () => {
  return {
    type: SELECT_VOLUME,
  };
};
