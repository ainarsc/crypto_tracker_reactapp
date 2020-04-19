import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { isFetching } from "../../store/helpers";
import LoadingBar from "../ui/LoadingBar";
import Copyright from "../Copyright";
import { useMarketData, useHistoryData, useNewsData } from "../../api";

//MUI IMPORTS
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container, Box, Fade } from "@material-ui/core";
//DASHBOARD COMPONENTS
import {
  PriceList,
  DataTable,
  NewsStand,
  DataWidget,
  MarketCap,
  PriceHistory,
} from "./components";

//STYLES
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  offset: {
    height: 70,
  },
}));

export const Dashboard = () => {
  const classes = useStyles();
  const apiData = useSelector((state) => state.apiData);
  const fetching = isFetching(apiData);
  useMarketData();
  useHistoryData();
  useNewsData();

  return (
    <main className={classes.root}>
      {fetching ? (
        <Fragment>
          <div className={classes.offset} />
          <LoadingBar />
        </Fragment>
      ) : (
        <Fade in={true} timeout={1000}>
          <Container maxWidth="lg">
            <div className={classes.offset} />
            <Grid container>
              <PriceList />
              <Grid item xs={12}>
                <PriceHistory />
              </Grid>
              <Grid item xs={12} sm={6}>
                <MarketCap />
              </Grid>
              <Grid item xs={12} sm={6}>
                <DataWidget />
              </Grid>

              <Grid item xs={12}>
                <DataTable />
              </Grid>
              <Grid item xs={12}>
                <NewsStand />
              </Grid>
            </Grid>
            <Box pb={4} pt={4}>
              <Copyright />
            </Box>
          </Container>
        </Fade>
      )}
    </main>
  );
};
