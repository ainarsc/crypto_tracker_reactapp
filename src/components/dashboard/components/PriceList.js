import React from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
//HELPERS
import { getPrice } from "../../../store/selectors";
import { isFetched } from "../../../api/useApi";
//MUI IMPORTS
import { Grid, Paper, Typography, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
    minWidth: 100,
    borderWidth: 1,
    borderColor: theme.palette.divider,
    borderStyle: "solid"
  }
}));

const PriceList = () => {
  const { currency, cryptoList } = useSelector(state => state.apiPreferences);
  const data = useSelector(state => state.apiData);
  const classes = useStyles();

  return (
    isFetched(data, "FULL_DATA") &&
    _.map(cryptoList, (coin, index) => (
      <Grid key={index} item xs={4} md={2}>
        <Paper className={classes.root}>
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
