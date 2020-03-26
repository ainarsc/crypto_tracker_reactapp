import { createSelector } from "reselect";
import { isFetched } from "../../api/useApi";
import _ from "lodash";

const getFullData = state => {
  return isFetched(state.apiData, "FULL_DATA") && state.apiData.FULL_DATA.data;
};

const getCryptos = state => state.apiPreferences.cryptoList;

export const getSelectedCoins = createSelector(
  [getFullData, getCryptos],
  (data, cryptos) => {
    return _.toArray(_.pick(data, cryptos));
  }
);
