import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchNewsAction } from "../store/actions/fetchData";
import { getNewsUrl } from "./config/cryptoUrls";
import config from "./config";

export const useNewsData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const url = getNewsUrl();
    const newsIndicators = config.news.indicators;

    dispatch(fetchNewsAction(url, newsIndicators));
  }, [dispatch]);
};
