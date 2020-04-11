import { createSelector } from "reselect";
import _ from "lodash";

const getPriceHistory = (state) => {
  const { data } = state.apiData.HISTORY;
  const { crypto } = state.apiPreferences;

  return !_.isEmpty(data[crypto]) && data[crypto].Data;
};
const getSelectedTimeFrame = (state) => state.cryptoReducer.priceHistory;

const getDayData = (state) => {
  return {};
};
export const getTimeFrame = createSelector(
  [getPriceHistory, getSelectedTimeFrame],
  (data, time) => {
    switch (time) {
      case "DAY":
        return getDayData;
      case "WEEK":
        return _.takeRight(data, 7);
      case "MONTH":
        return _.takeRight(data, 30);
      case "YEAR":
        return _.takeRight(data, 365);
      case "ALL":
        return data;
      default:
        break;
    }
  }
);
