import {
  SELECT_HISTORY,
  SELECT_TREEMAP,
  SELECT_CHANGE,
  SELECT_VOLUME,
  SELECT_MKTSUPPLY,
} from "../actions/actionTypes";

const cryptoReducer = (
  state = {
    priceHistory: "1 Month",
    treeMap: "Market Cap",
    priceChange: "Δ(24h)",
    volume: "Vol(24h)",
    mktSupply: "MKT CAP",
  },
  event
) => {
  switch (event.type) {
    case SELECT_HISTORY:
      return {
        ...state,
        priceHistory: event.payload,
      };
    case SELECT_TREEMAP:
      return {
        ...state,
        treeMap: event.payload,
      };

    case SELECT_CHANGE:
      return {
        ...state,
        priceChange: event.payload,
      };

    case SELECT_VOLUME:
      return {
        ...state,
        volume: event.payload,
      };
    case SELECT_MKTSUPPLY:
      return {
        ...state,
        mktSupply: event.payload,
      };

    default:
      return state;
  }
};

export default cryptoReducer;
