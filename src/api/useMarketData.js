import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/actions/fetchData";
import { getMarketDataUrl } from "./config/cryptoUrls";
import config from "./config";

export const useMarketData = () => {
  const dispatch = useDispatch();
  const { crypto, currency } = useSelector((state) => state.apiPreferences);

  useEffect(() => {
    const url = getMarketDataUrl();
    const marketIndicators = config.marketData.indicators;
    const MARKET_DATA = config.marketData.dataCategory;

    dispatch(fetchData(MARKET_DATA, url, crypto, currency, marketIndicators));
  }, [currency, crypto, dispatch]);
};
