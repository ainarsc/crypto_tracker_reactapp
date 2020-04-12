import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/actions/fetchData";
import { getNewsUrl } from "./cryptoUrls";
import config from "./config.json";

export const useNewsData = () => {
  const dispatch = useDispatch();
  const { crypto, currency } = useSelector((state) => state.apiPreferences);

  useEffect(() => {
    const url = getNewsUrl();
    const newsIndicators = config.marketData.indicators;
    const NEWS = config.marketData.dataCategory;

    dispatch(fetchData(NEWS, url, crypto, currency, newsIndicators));
  }, [currency, crypto, dispatch]);
};
