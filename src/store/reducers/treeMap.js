import {
  SELECT_SUPPLY,
  SELECT_MKTCAP,
  SELECT_VOLUME,
} from "../actions/actionTypes";

const treeMap = (state = { selected: "mktcap" }, event) => {
  switch (event.type) {
    case SELECT_SUPPLY:
      return {
        ...state,
        selected: "supply",
      };
    case SELECT_MKTCAP:
      return {
        ...state,
        selected: "mktcap",
      };
    case SELECT_VOLUME:
      return {
        ...state,
        selected: "volume",
      };
    default:
      return state;
  }
};

export default treeMap;
