import _ from "lodash";

export const processHistoryData = (dataSet, crypto, currency) => {
  let result = { [crypto]: dataSet.Data };

  return result; // result.{crypto.{aggregated, timeFrom, timeTo, data{}}}
};

export const cleanseDataProto = (dataSet, currency, ...args) => {
  const data = currency ? dataSet.RAW : _.take(dataSet.Data, 8);

  const result = _.mapValues(data, item => {
    if (currency) {
      return _.pick(item[currency], ...args);
    } else {
      return _.pick(item, ...args);
    }
  });

  //Returns an array of objects
  return result;
};
