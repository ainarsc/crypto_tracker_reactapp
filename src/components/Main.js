import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import clsx from "clsx";

//Component imports
import Copyright from "./Copyright";
import PrimaryItem from "./dashboard/PrimaryItem";
import SecondaryItem from "./dashboard/SecondaryItem";
import CryptoNews from "./dashboard/CryptoNews";
import CurrencyDataTable from "./dashboard/CurrencyDataTable";
import PriceList from "./dashboard/PriceList";

//Styles
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 370
  },
  appBarSpacer: theme.mixins.toolbar
  // orderPie: {
  //   order: 2
  // }
}));

export default function Main() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <PriceList classNAME={classes.paper} />
        <Grid container spacing={2}>
          <PrimaryItem classNAME={fixedHeightPaper} item xs={12} lg={8} />
          <SecondaryItem classNAME={fixedHeightPaper} xs={12} md={6} lg={4} />
          <CryptoNews classNAME={fixedHeightPaper} xs={12} md={6} lg={4} />
          <CurrencyDataTable classNAME={fixedHeightPaper} xs={12} lg={8} />
        </Grid>
        <Box pt={4}>
          <Copyright />
        </Box>
      </Container>
    </main>
  );
}
