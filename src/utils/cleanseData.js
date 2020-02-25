import _ from "lodash";

export const cleanseData = (dataSet, currency, ...args) => {
  const data = currency ? dataSet.RAW : _.take(dataSet.Data, 8);

  const result = _.map(data, item => {
    if (currency) {
      return _.pick(item[currency], ...args);
    } else {
      return _.pick(item, ...args);
    }
  });

  //Returns an array of objects
  return result;
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
