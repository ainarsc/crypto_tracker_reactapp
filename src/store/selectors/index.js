export const getFullData = state => state.FULL_DATA.data;
export const getPrice = (state, coin, currency) =>
  state.FULL_DATA.data[coin][currency].PRICE;
export const getNews = state => state.NEWS.data;
export const getDataPoint = (state, preferences, dataPoint) =>
  state.FULL_DATA.data[preferences.crypto][preferences.currency][dataPoint];
export const getTimeFrom = (state, preferences) =>
  state.HISTORY.data[preferences.crypto].TimeFrom;
export const getTimeTo = (state, preferences) =>
  state.HISTORY.data[preferences.crypto].TimeTo;
export const getPriceHistory = (state, preferences) =>
  state.HISTORY.data[preferences.crypto].Data;
