import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCrypto } from "../../../store/actions/setPreferences";
//HELPERS
import { getPrice } from "../../../store/helpers";
//MUI IMPORTS
import { Grid, Paper, Typography, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import isEmpty from "lodash/isEmpty";
import map from "lodash/map";
import round from "lodash/round";

const useStyles = makeStyles((theme) => ({
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
    minWidth: 100,
    borderWidth: 1,
    borderColor: theme.palette.divider,
    borderStyle: "solid",
  },
  selected: {
    backgroundColor: theme.palette.primary.light,
  },
  ghost: {
    height: 72,
    minWidth: 100,
    backgroundColor: theme.palette.background.paper,
  },
}));

const PriceList = () => {
  const { currency, cryptoList } = useSelector((state) => state.apiPreferences);
  const marketData = useSelector((state) => state.apiData.MARKET_DATA);
  const selectedCoin = useSelector((state) => state.apiPreferences.crypto);
  const dispatch = useDispatch();
  const classes = useStyles();
  const active = clsx(classes.root, classes.selected);
  const isIdle = isEmpty(marketData.data);

  const handleClick = (coin) => {
    dispatch(setCrypto(coin));
  };

  const Ghost = (props) => <div className={props.styles} />;

  return map(cryptoList, (coin, index) => (
    <Grid key={index} item xs={4} md={2}>
      {isIdle ? (
        <Ghost styles={classes.root} />
      ) : (
        <Paper
          onClick={() => handleClick(coin)}
          className={selectedCoin === coin ? active : classes.root}
        >
          <Typography variant="subtitle1">{`${coin} - ${currency}`}</Typography>
          <Divider width="100%" orientation="horizontal" variant="middle" />
          <Typography color="textSecondary" variant="h6">{`${round(
            getPrice(marketData, coin, currency),
            2
          )}`}</Typography>
        </Paper>
      )}
    </Grid>
  ));
};

export default PriceList;
