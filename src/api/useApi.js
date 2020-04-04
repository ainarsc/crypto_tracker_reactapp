import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/actions/fetchData";
import _ from "lodash";
//Local data for testing
import FULL_DATA from "./FULL_DATA.json";
import HISTORY from "./HISTORY.json";
import NEWS from "./NEWS.json";

export const isFetched = (apiData, dataCategory) =>
  !_.isEmpty(apiData[dataCategory].data) && !apiData[dataCategory].isFetching;

export const isFetching = ({ FULL_DATA, HISTORY, NEWS }) => {
  return FULL_DATA.isFetching && HISTORY.isFetching && NEWS.isFetching;
};

export default function () {
  const dispatch = useDispatch();
  const { crypto, currency } = useSelector((state) => state.apiPreferences);

  //&api_key=${process.env.REACT_APP_API_KEY}
  // &api_key=${process.env.REACT_APP_API_KEY}
  // &api_key=${process.env.REACT_APP_API_KEY}
  useEffect(() => {
    const dataToFetch = {
      FULL_DATA: {
        localData: FULL_DATA, //FOR TESTING
        url: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,BCH,BSV,LTC,EOS,ETC,XTZ,BNB,ZEC,ADA,XLM,NEO,DASH&&tsyms=USD,EUR`,
        keys: [
          "FROMSYMBOL",
          "PRICE",
          "CHANGE24HOUR",
          "CHANGEPCT24HOUR",
          "CHANGEHOUR",
          "CHANGEPCTHOUR",
          "VOLUME24HOUR",
          "VOLUMEHOUR",
          "VOLUME24HOUR",
          "OPENDAY",
          "HIGHDAY",
          "LOWDAY",
          "SUPPLY",
          "MKTCAP",
          "TOTALVOLUME24H",
        ],
      },
      HISTORY: {
        localData: HISTORY, //FOR TESTING
        url: `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${crypto}&tsym=${currency}&limit=30&aggregate=1`,
      },
      NEWS: {
        localData: NEWS, //FOR TESTING
        url: `https://min-api.cryptocompare.com/data/v2/news/?lang=EN`,
        keys: ["title", "published_on", "url", "categories", "source_info"],
      },
    };
    _.forEach(dataToFetch, (dataCategory, key) => {
      dispatch(
        fetchData(key, dataCategory.url, crypto, currency, dataCategory.keys)
      );
    });
    console.log("[useApi]: State Updated");
  }, [currency, crypto, dispatch]);
}
