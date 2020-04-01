import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { getPrice } from "../../../store/selectors";
import { isFetched } from "../../../api/useApi";
import { connect } from "react-redux";
import _ from "lodash";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    overflow: "auto",
    height: 72,
    minWidth: 100
  }
}));

const PriceList = ({ apiData, currency, cryptoList }) => {
  const classes = useStyles();

  return (
    isFetched(apiData, "FULL_DATA") &&
    _.map(cryptoList, (coin, index) => (
      <Grid key={index} item xs={4} md={2}>
        <Paper className={classes.root}>
          <Typography variant="subtitle1">{`${coin} - ${currency}`}</Typography>
          <Divider width="100%" orientation="horizontal" variant="middle" />
          <Typography variant="h6">{`${_.round(
            getPrice(apiData, coin, currency),
            2
          )}`}</Typography>
        </Paper>
      </Grid>
    ))
  );
};

const mapState = state => ({
  apiData: state.apiData,
  currency: state.apiPreferences.currency,
  cryptoList: state.apiPreferences.cryptoList
});

export default connect(mapState)(PriceList);
