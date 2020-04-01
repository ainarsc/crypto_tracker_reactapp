import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Fade from "@material-ui/core/Fade";
import clsx from "clsx";
import { useSelector } from "react-redux";
import useApi, { isFetching } from "../../api/useApi";
import LoadingBar from "../ui/LoadingBar";
import TreeMap from "./components/TreeMap";
//Component imports
import {
  PriceList,
  DataTable,
  NewsStand,
  PriceTrend,
  DataWidget
} from "./components";

import Copyright from "../Copyright";

//Styles
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 64,
    height: "92vh",
    overflow: "auto"
  },
  paper: {
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
    alignContent: "center",
    justifyContent: "center",
    padding: theme.spacing(1),
    fontSize: 16,
    margin: theme.spacing(1),
    overflow: "auto"
  },
  border: {
    borderWidth: 1,
    borderColor: theme.palette.primary.light,
    borderStyle: "solid"
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
    height: 180,
    width: "50%",
    textAlign: "center",
    color: theme.palette.text.secondary,
    justifyContent: "center"
  }
}));

export const Dashboard = () => {
  const classes = useStyles();

  const priceListStyles = clsx(
    classes.paperSmall,
    classes.fixedHeightSmall,
    classes.border
  );

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
            <Grid container>
              <PriceList styles={priceListStyles} />
              <Grid item xs={12} sm={6}>
                <TreeMap />
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
                <NewsStand styles={classes} />
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
