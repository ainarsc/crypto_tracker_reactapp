import _ from "lodash";

export const isFetched = (apiData, dataCategory) =>
  !_.isEmpty(apiData[dataCategory].data) && !apiData[dataCategory].isFetching;

export const isFetching = ({ FULL_DATA, HISTORY, NEWS }) => {
  return FULL_DATA.isFetching && HISTORY.isFetching && NEWS.isFetching;
};
