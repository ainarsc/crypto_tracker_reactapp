import {
  SELECT_SUPPLY,
  SELECT_MKTCAP,
  SELECT_CHANGE1,
  SELECT_CHANGE24,
  SELECT_VOL1,
  SELECT_VOL24,
} from "../actions/actionTypes";

const treeMap = (
  state = { mktcapVSsupply: "mktcap", volume: "24hour", change: "24hour" },
  event
) => {
  switch (event.type) {
    case SELECT_SUPPLY:
      return {
        ...state,
        mktcapVSsupply: "supply",
      };
    case SELECT_MKTCAP:
      return {
        ...state,
        mktcapVSsupply: "mktcap",
      };
    case SELECT_CHANGE1:
      return {
        ...state,
        change: "1hour",
      };
    case SELECT_CHANGE24:
      return {
        ...state,
        change: "24hour",
      };
    case SELECT_VOL1:
      return { ...state, volume: "1hour" };
    case SELECT_VOL24:
      return { ...state, volume: "24hour" };
    default:
      return state;
  }
};

export default treeMap;
