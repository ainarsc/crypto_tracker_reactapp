import forIn from "lodash/forIn";
import mapValues from "lodash/mapValues";
import pick from "lodash/pick";
import takeRight from "lodash/takeRight";
import take from "lodash/take";
import config from "../api/config";

export const cleanupFullData = (apiData, ...args) => {
  const data = apiData.RAW; //axios.data.RAW.[crypto].[currency].Data

  let mapped = {};
  forIn(data, (crypto, cryptoName) => {
    mapped[cryptoName] = mapValues(crypto, (currency) => {
      return pick(currency, ...args);
    });
  });

  return mapped;
};

export const cleanupNewsData = (apiData, ...args) => {
  const data = take(apiData.Data, 8); //Pick last 8 news articles of API result
  const result = mapValues(data, (item) => {
    return pick(item, ...args);
  });

  return result;
};

export const cleanupHistoryData = (apiData, crypto) => {
  const { TimeFrom, TimeTo } = apiData.Data;
  const reduced =
    crypto === "BTC"
      ? takeRight(apiData.Data.Data, config.history.lengthBTC)
      : takeRight(apiData.Data.Data, config.history.lengthRest);

  let result = {
    [crypto]: {
      TimeFrom,
      TimeTo,
      Data: reduced,
    },
  };

  return result; // [crypto].{aggregated, timeFrom, timeTo, data{}}
};
