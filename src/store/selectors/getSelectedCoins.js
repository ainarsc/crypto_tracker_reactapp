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
      arr.push({
        name: coin[currency].FROMSYMBOL,
        MKTCAP: coin[currency].MKTCAP,
        SUPPLY: coin[currency].SUPPLY,
        VOLUME24HOUR: coin[currency].VOLUME24HOUR,
      });
    });

    return arr;
  }
);
