import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Fade from "@material-ui/core/Fade";
import clsx from "clsx";
import { useSelector } from "react-redux";
import useApi, { isFetching } from "../../api/useApi";
import LoadingBar from "../ui/LoadingBar";

//Component imports
import {
  PriceList,
  DataTable,
  MarketCap,
  NewsStand,
  PriceTrend,
  DataWidget
} from "./components";

import Copyright from "../Copyright";

//Styles
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  content: {
    flexGrow: 1,
    marginTop: 68,
    height: "90vh",
    overflow: "auto"
  },
  paper: {
    padding: theme.spacing(4),

    display: "flex",
    overflow: "auto",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    margin: theme.spacing(1)
  },
  paperSmall: {
    display: "flex",

    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(1),
    fontSize: 18,
    margin: theme.spacing(1),
    overflow: "auto"
  },
  fullWidth: {
    width: "100%"
  },
  fixedHeight: {
    height: 370
  },
  fixedHeightSmall: {
    height: 72,
    minWidth: 100
  },
  appBarSpacer: theme.mixins.toolbar,
  newsCard: {
    minWidth: 275,
    margin: theme.spacing(1)
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  newsTitle: {
    fontSize: 14
  },
  position: {
    marginBottom: theme.spacing(0)
  },
  newsContent: {
    padding: theme.spacing(2),

    "&:last-child": {
      paddingBottom: theme.spacing(1)
    }
  },
  dataWidgetRoot: {
    flexGrow: 1,
    alignContent: "center",

    margin: theme.spacing(1)
  },
  dataWidget: {
    padding: theme.spacing(1)
  },
  widgetContent: {
    display: "flex",

    flexDirection: "column",
    height: 178,
    textAlign: "center",
    color: theme.palette.text.secondary,
    justifyContent: "center"
  }
}));

const Dashboard = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const priceListStyles = clsx(classes.paperSmall, classes.fixedHeightSmall);
  const dataWidgetRoot = clsx(classes.fixedHeight, classes.dataWidgetRoot);

  const apiData = useSelector(state => state.apiData);
  const fetching = isFetching(apiData);

  useApi(); //Initiate API

  return (
    <main className={classes.content}>
      {fetching ? (
        <LoadingBar />
      ) : (
        <Fade in={true} timeout={1000}>
          <Container maxWidth="lg">
            <Grid container>
              <PriceList styles={priceListStyles} />
              <Grid item xs={12} sm={6}>
                <Paper className={fixedHeightPaper}>
                  <MarketCap />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper className={dataWidgetRoot}>
                  <DataWidget styles={classes} />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={fixedHeightPaper}>
                  <PriceTrend />
                </Paper>
              </Grid>

              <Grid item xs={12}>
                <DataTable styles={classes} />
              </Grid>

              <NewsStand styles={classes} />
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

export default Dashboard;
