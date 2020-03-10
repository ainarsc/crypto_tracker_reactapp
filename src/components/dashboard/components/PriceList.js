import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { getPrice } from "../../../store/selectors";
import { isFetched } from "../../../utils/useApi";
import { connect } from "react-redux";
import _ from "lodash";

const PriceList = ({ styles, apiData, currency, cryptoList }) => {
  return (
    isFetched(apiData, "FULL_DATA") && (
      <Grid container>
        {_.map(cryptoList, (coin, index) => (
          <Grid key={index} item xs={4} md={2}>
            <Paper className={styles}>
              <Typography variant="h6">{`${coin}`}</Typography>
              <Divider width="100%" orientation="horizontal" variant="middle" />
              <Typography variant="h6">{`${currency} ${_.round(
                getPrice(apiData, coin, currency),
                2
              )}`}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    )
  );
};

const mapState = state => ({
  apiData: state.apiData,
  currency: state.apiPreferences.currency,
  cryptoList: state.apiPreferences.cryptoList
});

export default connect(mapState)(PriceList);
