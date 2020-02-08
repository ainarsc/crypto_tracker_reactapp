import React from "react";

import Grid from "@material-ui/core/Grid";

import NewsCard from "./Card";

const CryptoNews = ({ classNAME, ...props }) => {
  return (
    <Grid item {...props}>
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </Grid>
  );
};

export default CryptoNews;
