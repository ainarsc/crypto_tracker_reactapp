import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Fade from "@material-ui/core/Fade";
import { useSelector } from "react-redux";
import useApi, { isFetching } from "../../api/useApi";
import LoadingBar from "../ui/LoadingBar";
import Copyright from "../Copyright";
//Component imports
import {
  PriceList,
  DataTable,
  NewsStand,
  PriceTrend,
  DataWidget,
  MarketCap
} from "./components";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  offset: {
    height: 70
  }
}));

export const Dashboard = () => {
  const classes = useStyles();
  const apiData = useSelector(state => state.apiData);
  const fetching = isFetching(apiData);

  useApi(); //Initiate API

  return (
    <main className={classes.root}>
      {fetching ? (
        <LoadingBar />
      ) : (
        <Fade in={true} timeout={1000}>
          <Container maxWidth="lg">
            <div className={classes.offset} />
            <Grid container>
              <PriceList />
              <Grid item xs={12} sm={6}>
                <MarketCap />
              </Grid>
              <Grid item xs={12} sm={6}>
                <DataWidget />
              </Grid>
              <Grid item xs={12}>
                <PriceTrend />
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
