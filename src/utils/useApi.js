import { useEffect } from "react";
import _ from "lodash";

export default function(fetchAction, state) {
  const crypto = state.crypto;
  const currency = state.currency;

  useEffect(() => {
    const fetchParams = {
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

    _.forEach(fetchParams, (data, key) => {
      fetchAction(key, data.url, crypto, currency, data.keys);
    });
    console.log("[useApi]: State Updated");
  }, [fetchAction, currency, crypto]);
}
