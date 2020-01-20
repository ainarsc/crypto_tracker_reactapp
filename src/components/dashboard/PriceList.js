import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const PriceList = ({ classNAME, children }) => {
  return (
    <Grid container spacing={2}>
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
      <Grid item xs={2}>
        <Paper className={classNAME}>BTC</Paper>
      </Grid>
    </Grid>
  );
};

export default PriceList;
