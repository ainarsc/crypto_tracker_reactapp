import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCrypto } from "../../../store/actions/setPreferences";
import _ from "lodash";
//HELPERS
import { getPrice, isFetched } from "../../../store/helpers";
//MUI IMPORTS
import { Grid, Paper, Typography, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

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
}));

const PriceList = () => {
  const { currency, cryptoList } = useSelector((state) => state.apiPreferences);
  const data = useSelector((state) => state.apiData);
  const selectedCoin = useSelector((state) => state.apiPreferences.crypto);
  const dispatch = useDispatch();
  const classes = useStyles();
  const active = clsx(classes.root, classes.selected);

  const handleClick = (coin) => {
    dispatch(setCrypto(coin));
  };

  return (
    isFetched(data, "MARKET_DATA") &&
    _.map(cryptoList, (coin, index) => (
      <Grid key={index} item xs={4} md={2}>
        <Paper
          onClick={() => handleClick(coin)}
          className={selectedCoin === coin ? active : classes.root}
        >
          <Typography variant="subtitle1">{`${coin} - ${currency}`}</Typography>
          <Divider width="100%" orientation="horizontal" variant="middle" />
          <Typography color="textSecondary" variant="h6">{`${_.round(
            getPrice(data, coin, currency),
            2
          )}`}</Typography>
        </Paper>
      </Grid>
    ))
  );
};

export default PriceList;
