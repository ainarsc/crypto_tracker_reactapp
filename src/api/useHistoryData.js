import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAction } from "../store/actions/fetchData";
import { getHistoryUrl, getHistoryUrlH } from "./config/cryptoUrls";
import { cleanupHistoryData } from "../utils/cleanupData";

export const useHistoryData = () => {
  const dispatch = useDispatch();
  const { crypto, currency } = useSelector((state) => state.apiPreferences);
  const HISTORY = "HISTORY";
  const HISTORY_H = "HISTORY_H";

  useEffect(() => {
    const urlDaily = getHistoryUrl(crypto, currency);
    const urlHourly = getHistoryUrlH(crypto, currency);

    dispatch(fetchAction(urlDaily, HISTORY, cleanupHistoryData, crypto));
    dispatch(fetchAction(urlHourly, HISTORY_H, cleanupHistoryData, crypto));
  }, [currency, crypto, dispatch]);
};
