import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import NewsCard from "./Card";
import axios from "axios";
import _ from "lodash";

const CryptoNews = ({ classNAME, ...props }) => {
  const url = `https://min-api.cryptocompare.com/data/v2/news/?lang=EN`;
  const [payload, setPayload] = useState([]);
  const [isFetched, setFetched] = useState(false);

  const cleanseData = data => {
    const picked = _.take(data, 8); //Take first 8 items from data array

    return _.map(picked, obj =>
      _.pick(obj, ["title", "published_on", "url", "categories", "source_info"])
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url); //return: axios.data
      const cleansed = cleanseData(result.data.Data);

      setPayload(cleansed);
      setFetched(true);
      console.log(cleansed);
    };
    fetchData();
  }, [url]);

  return (
    isFetched && (
      <Grid item {...props}>
        {_.map(payload, data => (
          <NewsCard
            title={data.title}
            url={data.url}
            categories={data.categories}
            source={data.source_info}
            date={data.published_on}
          />
        ))}
      </Grid>
    )
  );
};

export default CryptoNews;
