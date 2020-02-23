import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { connect } from "react-redux";
import { fetchData } from "../../../actions/fetchData";
import _ from "lodash";

const PriceList = ({ styles, data, fetchData, ...props }) => {
  useEffect(() => {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,BCH,BSV,LTC&&tsyms=USD`;
    const keysToPick = ["FROMSYMBOL", "PRICE"];

    fetchData("PRICE", url, "USD", keysToPick);
  }, [fetchData]);

  return (
    data.PRICE !== undefined && (
      <Grid {...props}>
        {_.map(data.PRICE.data, (coin, index) => (
          <Grid key={index} item xs={4} md={2}>
            <Paper className={styles}>
              <Typography variant="title">{`${coin.FROMSYMBOL}`}</Typography>
              <Divider
                width="100%"
                orientation="horizontal"
                variant="middle"
                flexItem
              />
              <Typography variant="h6">{`$${coin.PRICE}`}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    )
  );
};

const mapState = state => ({
  data: state.dataByCategory
});

const mapActions = {
  fetchData
};

export default connect(mapState, mapActions)(PriceList);
