import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/actions/fetchData";
import { getHistoryUrl } from "./cryptoUrls";

export const useHistoryData = () => {
  const dispatch = useDispatch();
  const { crypto, currency } = useSelector((state) => state.apiPreferences);

  useEffect(() => {
    const url = getHistoryUrl(crypto, currency);

    dispatch(fetchData("HISTORY", url, crypto, currency, null));
  }, [currency, crypto, dispatch]);
};
