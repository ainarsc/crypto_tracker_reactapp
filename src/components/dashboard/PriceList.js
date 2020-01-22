import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import useDataFetch from "../utils/useDataFetch";

const PriceList = ({ classNAME }) => {
  const crypto = "BTC";
  const currency = "USD";
  const url = `https://min-api.cryptocompare.com/data/price?fsym=${crypto}&tsyms=${currency}`;
  const [state] = useDataFetch(url);

  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <Paper className={classNAME}>{`BTC: $${state.data.USD}`}</Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper className={classNAME}>BTC</Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper className={classNAME}>BTC</Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper className={classNAME}>BTC</Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper className={classNAME}>BTC</Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper className={classNAME}>BTC</Paper>
      </Grid>
    </Grid>
  );
};

export default PriceList;
