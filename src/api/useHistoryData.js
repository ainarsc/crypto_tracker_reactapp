import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHistoryAction } from "../store/actions/fetchData";
import { getHistoryUrl } from "./config/cryptoUrls";

export const useHistoryData = () => {
  const dispatch = useDispatch();
  const { crypto, currency } = useSelector((state) => state.apiPreferences);

  useEffect(() => {
    const url = getHistoryUrl(crypto, currency);

    dispatch(fetchHistoryAction(url, crypto));
  }, [currency, crypto, dispatch]);
};
