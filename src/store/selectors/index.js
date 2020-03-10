export { getSelectedCoins } from "./getSelectedCoins";

export const getFullData = state => state.FULL_DATA.data;
export const getPrice = (state, coin, currency) =>
  state.FULL_DATA.data[coin][currency].PRICE;
export const getNews = state => state.NEWS.data;
export const getDataPoint = (state, crypto, currency, dataPoint) =>
  state.FULL_DATA.data[crypto][currency][dataPoint];
export const getTimeFrom = (state, crypto) =>
  state.HISTORY.data[crypto].TimeFrom;
export const getTimeTo = (state, crypto) => state.HISTORY.data[crypto].TimeTo;
export const getPriceHistory = (state, crypto) =>
  state.HISTORY.data[crypto].Data;
