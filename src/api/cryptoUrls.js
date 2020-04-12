export const getNewsUrl = () => {
  return `https://min-api.cryptocompare.com/data/v2/news/?lang=EN`;
};

// export const historyUrl_BACKUP = (coin, curr) => {
//   return `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${coin}&tsym=${curr}&limit=30&aggregate=1`;
// };

export const getHistoryUrl = (coin, curr) => {
  return `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${coin}&tsym=${curr}&allData=true`;
};
export const getMarketData = () => {
  return `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,BCH,BSV,LTC,EOS,ETC,XTZ,BNB,ZEC,ADA,XLM,NEO,DASH&&tsyms=USD,EUR`;
};
