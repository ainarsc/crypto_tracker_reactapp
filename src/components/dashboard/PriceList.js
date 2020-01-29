import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import useDataFetch from "../utils/useDataFetch";

const PriceList = ({ classNAME }) => {
  const url = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP,BCH,BSV,LTC&tsyms=USD`;
  const [state] = useDataFetch(url);

  return (
    <Grid container spacing={2}>
      {Object.keys(state.data).map(key => (
        <Grid item xs={2}>
          <Paper
            className={classNAME}
          >{`${key}: $${state.data[key].USD}`}</Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default PriceList;
