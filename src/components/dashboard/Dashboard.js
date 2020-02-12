import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";

//Component imports
import {
  PriceList,
  DataTable,
  MarketCap,
  NewsStand,
  PriceTrend
} from "./components";

import Copyright from "../Copyright";

//Styles
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
    marginTop: theme.spacing(1)
  },
  paper: {
    padding: theme.spacing(4),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
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
    height: 64,
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
  }
}));

export default function Dashboard() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const priceListStyles = clsx(classes.paperSmall, classes.fixedHeightSmall);

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />

      <Container maxWidth="lg">
        <Grid container>
          <PriceList container styles={priceListStyles} />

          <Grid item xs={12} md={7} lg={8}>
            <Paper className={fixedHeightPaper}>
              <PriceTrend />
            </Paper>
          </Grid>

          <Grid item xs={12} md={5} lg={4}>
            <Paper className={fixedHeightPaper}>
              <MarketCap />
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <DataTable />
          </Grid>

          <NewsStand styles={classes} xs={12} />
        </Grid>

        <Box pt={4}>
          <Copyright />
        </Box>
      </Container>
    </main>
  );
}
