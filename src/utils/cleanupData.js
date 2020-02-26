import _ from "lodash";

export const cleanupFullData = (apiData, currency, ...args) => {
  const data = apiData.RAW; //axios.data.RAW.[crypto].[currency].Data
  const result = _.mapValues(data, item => {
    return _.pick(item[currency], ...args);
  });

  return result;
};

export const cleanupNewsData = (apiData, ...args) => {
  const data = _.take(apiData.Data, 8); //Pick last 8 news articles of API result
  const result = _.mapValues(data, item => {
    return _.pick(item, ...args);
  });

  return result;
};

export const cleanupHistoryData = (apiData, crypto) => {
  let result = { [crypto]: apiData.Data };

  return result; // result.[crypto].{aggregated, timeFrom, timeTo, data{}}
};
