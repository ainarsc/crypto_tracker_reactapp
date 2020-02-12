import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import useDataFetch from "../utils/useDataFetch";

const PriceList = ({ styles }) => {
  const url = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP,BCH,BSV,LTC&tsyms=USD`;
  const [state] = useDataFetch(url);

  return (
    <Grid container>
      {Object.keys(state.payload).map((key, index) => (
        <Grid key={index} item xs={2}>
          <Paper
            className={styles}
          >{`${key}: $${state.payload[key].USD}`}</Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default PriceList;
