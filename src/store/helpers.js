import _ from "lodash";

export const isFetched = (apiData, dataCategory) =>
  !_.isEmpty(apiData[dataCategory].data) && !apiData[dataCategory].isFetching;

export const isFetching = ({ MARKET_DATA, HISTORY, NEWS }) => {
  return MARKET_DATA.isFetching && HISTORY.isFetching && NEWS.isFetching;
};

export const getFullData = (state) => state.MARKET_DATA.data;
export const getPrice = (state, coin, currency) =>
  state.data[coin][currency].PRICE;
export const getNews = (state) => state.NEWS.data;
export const getDataPoint = (state, crypto, currency, dataPoint) =>
  state.MARKET_DATA.data[crypto][currency][dataPoint];
export const getTimeFrom = (state, crypto) =>
  state.HISTORY.data[crypto].TimeFrom;
export const getTimeTo = (state, crypto) => state.HISTORY.data[crypto].TimeTo;
export const getPriceHistory = (state, crypto) =>
  state.HISTORY.data[crypto].Data;
