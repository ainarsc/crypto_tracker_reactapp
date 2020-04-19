import { createSelector } from "reselect";
import { isFetched } from "../helpers";
import _ from "lodash";

const getFullData = (state) => {
  return (
    isFetched(state.apiData, "MARKET_DATA") && state.apiData.MARKET_DATA.data
  );
};

const getCurrency = (state) => state.apiPreferences.currency;

export const getSelectedCoins = createSelector(
  [getFullData, getCurrency],

  (data, currency) => {
    let arr = [];
    _.forIn(data, (coin) => {
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
