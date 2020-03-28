import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/actions/fetchData";
import _ from "lodash";

export const isFetched = (apiData, dataCategory) =>
  !_.isEmpty(apiData[dataCategory].data) && !apiData[dataCategory].isFetching;

export const isFetching = ({ FULL_DATA, HISTORY, NEWS }) => {
  return FULL_DATA.isFetching && HISTORY.isFetching && NEWS.isFetching;
};

export default function() {
  const dispatch = useDispatch();
  const { crypto, currency } = useSelector(state => state.apiPreferences);

  useEffect(() => {
    const dataToFetch = {
      FULL_DATA: {
        url: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,BCH,BSV,LTC,EOS,ETC,XTZ,BNB,ZEC,ADA,XLM,NEO,DASH&&tsyms=USD,EUR`,
        keys: [
          "FROMSYMBOL",
          "PRICE",
          "CHANGE24HOUR",
          "CHANGEPCT24HOUR",
          "CHANGEHOUR",
          "CHANGEPCTHOUR",
          "TOTALVOLUME24H",
          "MKTCAP"
        ]
      },
      HISTORY: {
        url: `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${crypto}&tsym=${currency}&limit=30&aggregate=1`
      },
      NEWS: {
        url: "https://min-api.cryptocompare.com/data/v2/news/?lang=EN",
        keys: ["title", "published_on", "url", "categories", "source_info"]
      }
    };

    _.forEach(dataToFetch, (dataCategory, key) => {
      dispatch(
        fetchData(key, dataCategory.url, crypto, currency, dataCategory.keys)
      );
    });
    console.log("[useApi]: State Updated");
  }, [currency, crypto, dispatch]);
}