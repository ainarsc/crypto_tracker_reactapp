export const isFullDataSet = state =>
  state.FULL_DATA !== undefined && !state.FULL_DATA.isFetching;

export const getFullData = state => state.FULL_DATA.data;
export const getPrice = (state, coin, currency) =>
  state.FULL_DATA.data[coin][currency].PRICE;
