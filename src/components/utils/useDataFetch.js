import { useEffect, useState, useReducer } from "react";
import axios from "axios";

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        payload: action.payload
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    default:
      throw new Error();
  }
};

export default function useDataFetch(initialUrl, initialData = {}) {
  const [url, setUrl] = useState(initialUrl);

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    payload: initialData
  });

  useEffect(() => {
    //Component is mounted (user hasn't navigated away yet)
    let cancelled = false;

    const fetchData = async () => {
      dispatch({ type: "FETCH_INIT" });
      try {
        const result = await axios(url);
        if (!cancelled) {
          dispatch({ type: "FETCH_SUCCESS", payload: result.data });
        }
      } catch (error) {
        if (!cancelled) {
          dispatch({ type: "FETCH_FAILURE" });
        }
      }
    };

    //Call the function
    fetchData();
    //Clean up
    return () => (cancelled = true);
  }, [url]);

  return [state, setUrl];
}
