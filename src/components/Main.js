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
import PriceList from "./dashboard/PriceList";
import CurrencyDataTable from "./charts/Table";

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
  appBarSpacer: theme.mixins.toolbar
}));

export default function Main() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />

      <Container maxWidth="lg">
        <Grid container>
          <PriceList styles={classes.paper} />
          <PrimaryItem styles={fixedHeightPaper} item xs={12} lg={8} />
          <SecondaryItem styles={fixedHeightPaper} xs={12} md={6} lg={4} />

          <Grid item xs={12}>
            <CurrencyDataTable />
          </Grid>
          <CryptoNews xs={12} />
        </Grid>

        <Box pt={4}>
          <Copyright />
        </Box>
      </Container>
    </main>
  );
}
