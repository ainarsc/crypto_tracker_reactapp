import { createSelector } from "reselect";
import { isFetched } from "../../api/useApi";
import _ from "lodash";

const getFullData = state => {
  return isFetched(state.apiData, "FULL_DATA") && state.apiData.FULL_DATA.data;
};

const getCurrency = state => state.apiPreferences.currency;

export const getSelectedCoins = createSelector(
  [getFullData, getCurrency],

  (data, currency) => {
    let arr = [];
    _.forIn(data, coin => {
      arr.push({
        name: coin[currency].FROMSYMBOL,
        value: coin[currency].MKTCAP
      });
    });

    return arr;
  }
);
