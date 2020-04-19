import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMarketDataAction } from "../store/actions/fetchData";
import { getMarketDataUrl } from "./config/cryptoUrls";
import config from "./config";

export const useMarketData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const url = getMarketDataUrl();
    const marketIndicators = config.marketData.indicators;

    dispatch(fetchMarketDataAction(url, marketIndicators));
  }, [dispatch]);
};
