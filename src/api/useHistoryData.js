import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAction } from "../store/actions/fetchData";
import { getHistoryUrl } from "./config/cryptoUrls";
import { cleanupHistoryData } from "../utils/cleanupData";

export const useHistoryData = () => {
  const dispatch = useDispatch();
  const { crypto, currency } = useSelector((state) => state.apiPreferences);
  const HISTORY = "HISTORY";

  useEffect(() => {
    const url = getHistoryUrl(crypto, currency);

    dispatch(fetchAction(url, HISTORY, cleanupHistoryData, crypto));
  }, [currency, crypto, dispatch]);
};
