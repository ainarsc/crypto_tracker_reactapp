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

export const cleanseDataMarketCap = obj => {
  // d = DISPLAY
  const result = _.mapValues(obj, (val, key) => {
    return {
      name: key,
      price: val.USD.PRICE,
      marketCap: _.round(val.USD.MKTCAP, -7) / 1000000000
    };
  });
  return _.toArray(result); // [{name: "BTC", price: $999, marketCap: $99B}, {name: "BTC", price: $999, marketCap: $99B}, ...]
};
