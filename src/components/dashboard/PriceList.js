import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import axios from "axios";

const PriceList = ({ classNAME }) => {
  const [data, setData] = useState([]);
  const crypto = "BTC";
  const currency = "USD";

  useEffect(() => {
    let fetchData = async () => {
      try {
        const result = await axios.get(
          `https://min-api.cryptocompare.com/data/price?fsym=${crypto}&tsyms=${currency}`
        );
        setData(result.data.USD);
      } catch (error) {
        console.log(`Error fetching data: ${error}`);
      }
    };
    fetchData();
  }, [crypto, currency]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <Paper className={classNAME}>{`BTC: $${data}`}</Paper>
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
