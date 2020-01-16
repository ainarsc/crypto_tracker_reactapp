import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import clsx from "clsx";
import Copyright from "../Copyright";
import LineChart from "../charts/LineChart";
import ChartPie from "../charts/Pie";
import CurrTable from "../charts/Table";
import Typography from "@material-ui/core/Typography";

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
    height: 220
  },
  appBarSpacer: theme.mixins.toolbar
}));

export default function Main() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Paper className={classes.paper}>BTC</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>BTC</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>BTC</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>BTC</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>BTC</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>BTC</Paper>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper className={fixedHeightPaper}>
              <LineChart />
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>
              <ChartPie />
            </Paper>
          </Grid>

          <Grid item xs={12} md={8} lg={9}>
            <Paper className={fixedHeightPaper}>
              <CurrTable />
            </Paper>
          </Grid>

          <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>
              <Typography variant="h5">Title</Typography>
              <Typography variant="body1">Foof Fooo Fooo Fooo Foo</Typography>
              <Typography variant="h5">Title</Typography>
              <Typography variant="body1">Foof Fooo Fooo Fooo Foo</Typography>
              <Typography variant="h5">Title</Typography>
              <Typography variant="body1">Foof Fooo Fooo Fooo Foo</Typography>
            </Paper>
          </Grid>
        </Grid>
        <Box pt={4}>
          <Copyright />
        </Box>
      </Container>
    </main>
  );
}
