export const isFetching = ({ MARKET_DATA, HISTORY, NEWS }) => {
  return MARKET_DATA.isFetching || HISTORY.isFetching || NEWS.isFetching;
};

export const getPrice = (state, coin, currency) =>
  state.data[coin][currency].PRICE;
export const getNews = (state) => state.data;
export const getDataPoint = (state, crypto, currency, dataPoint) =>
  state.data[crypto][currency][dataPoint];
export const getTimeFrom = (state, crypto) =>
  state.HISTORY.data[crypto].TimeFrom;
export const getTimeTo = (state, crypto) => state.HISTORY.data[crypto].TimeTo;
export const getPriceHistory = (state, crypto) =>
  state.HISTORY.data[crypto].Data;
