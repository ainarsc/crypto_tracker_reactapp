import { createSelector } from "reselect";
import isEmpty from "lodash/isEmpty";
import takeRight from "lodash/takeRight";

const getDailyData = (state) => {
  const { data } = state.apiData.HISTORY;
  const { crypto } = state.apiPreferences;
  return !isEmpty(data[crypto]) && data[crypto].Data;
};
const getHourlyData = (state) => {
  const { data } = state.apiData.HISTORY_H;
  const { crypto } = state.apiPreferences;
  return !isEmpty(data[crypto]) && data[crypto].Data;
};
const getSelectedTimeFrame = (state) => state.cryptoReducer.priceHistory;

export const getTimeFrame = createSelector(
  [getDailyData, getHourlyData, getSelectedTimeFrame],
  (daily, hourly, time) => {
    switch (time) {
      case "DAY":
        return takeRight(hourly, 24);
      case "WEEK":
        return hourly;
      case "MONTH":
        return takeRight(daily, 30);
      case "YEAR":
        return takeRight(daily, 365);
      case "ALL":
        return daily;
      default:
        break;
    }
  }
);
