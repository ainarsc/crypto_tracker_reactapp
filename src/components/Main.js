import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";

//Component imports
import PriceList from "./dashboard/PriceList";
import PriceTrend from "./dashboard/PriceTrend";
import MarketCap from "./dashboard/MarketCap";
import DataTable from "./dashboard/DataTable";
import NewsStand from "./dashboard/NewsStand";
import Copyright from "./Copyright";

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
  fixedHeight: {
    height: 370
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

export default function Main() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />

      <Container maxWidth="lg">
        <Grid container>
          <PriceList container styles={classes.paper} />

          <Grid item xs={12} lg={8}>
            <Paper className={fixedHeightPaper}>
              <PriceTrend />
            </Paper>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
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
