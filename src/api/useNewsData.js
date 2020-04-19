import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAction } from "../store/actions/fetchData";
import { getNewsUrl } from "./config/cryptoUrls";
import { cleanupNewsData } from "../utils/cleanupData";
import config from "./config";

export const useNewsData = () => {
  const dispatch = useDispatch();
  const NEWS = "NEWS";
  useEffect(() => {
    const url = getNewsUrl();
    const newsIndicators = config.news.indicators;

    dispatch(fetchAction(url, NEWS, cleanupNewsData, newsIndicators));
  }, [dispatch]);
};
