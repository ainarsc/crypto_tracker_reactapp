import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/actions/fetchData";
import { newsUrl, historyUrl, fullDataUrl } from "./urls";
import config from "./config.json";
import _ from "lodash";

export const isFetched = (apiData, dataCategory) =>
  !_.isEmpty(apiData[dataCategory].data) && !apiData[dataCategory].isFetching;

export const isFetching = ({ FULL_DATA, HISTORY, NEWS }) => {
  return FULL_DATA.isFetching && HISTORY.isFetching && NEWS.isFetching;
};

export default function () {
  const dispatch = useDispatch();
  const { crypto, currency } = useSelector((state) => state.apiPreferences);

  useEffect(() => {
    //&api_key=
    // const apiKey = process.env.REACT_APP_API_KEY;
    const data = {
      FULL_DATA: {
        url: fullDataUrl(),
        indicators: config.fullData.indicators,
      },
      HISTORY: {
        url: historyUrl(crypto, currency),
      },
      NEWS: {
        url: newsUrl(),
        indicators: config.fullData.indicators,
      },
    };
    _.forEach(data, (type, key) => {
      dispatch(fetchData(key, type.url, crypto, currency, type.indicators));
    });
  }, [currency, crypto, dispatch]);
}
