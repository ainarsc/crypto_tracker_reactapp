import { useEffect } from "react";
import _ from "lodash";

export default function(fetchAction) {
  useEffect(() => {
    const fetchParams = {
      FULL_DATA: {
        url:
          "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,BCH,BSV,LTC&&tsyms=USD",
        keys: [
          "FROMSYMBOL",
          "PRICE",
          "CHANGEHOUR",
          "CHANGE24HOUR",
          "TOTALVOLUME24H",
          "MKTCAP"
        ]
      },
      HISTORY: {
        url:
          "https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=30&aggregate=1"
      },
      NEWS: {
        url: "https://min-api.cryptocompare.com/data/v2/news/?lang=EN",
        keys: ["title", "published_on", "url", "categories", "source_info"]
      }
    };
    const BTC = "BTC";
    const USD = "USD";
    _.forEach(fetchParams, (data, key) => {
      fetchAction(key, data.url, BTC, USD, data.keys);
    });
    console.log("Fetch Success!");
  }, [fetchAction]);
}
