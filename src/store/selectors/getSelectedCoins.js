import { createSelector } from "reselect";
import isEmpty from "lodash/isEmpty";
import forIn from "lodash/forIn";

const getFullData = (state) => {
  const data = state.apiData.MARKET_DATA.data;
  return !isEmpty(data) && data;
};

const getCurrency = (state) => state.apiPreferences.currency;

export const getSelectedCoins = createSelector(
  [getFullData, getCurrency],

  (data, currency) => {
    let arr = [];
    forIn(data, (coin) => {
      if (arr.length < 9) {
        arr.push({
          name: coin[currency].FROMSYMBOL,
          MKTCAP: coin[currency].MKTCAP,
          TOTALVOLUME24HTO: coin[currency].TOTALVOLUME24HTO,
        });
      }
    });

    return arr;
  }
);
