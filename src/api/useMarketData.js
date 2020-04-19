import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAction } from "../store/actions/fetchData";
import { getMarketDataUrl } from "./config/cryptoUrls";
import { cleanupFullData } from "../utils/cleanupData";
import config from "./config";

export const useMarketData = () => {
  const dispatch = useDispatch();
  const MARKET_DATA = "MARKET_DATA";

  useEffect(() => {
    const url = getMarketDataUrl();
    const marketIndicators = config.marketData.indicators;

    dispatch(fetchAction(url, MARKET_DATA, cleanupFullData, marketIndicators));
  }, [dispatch]);
};
