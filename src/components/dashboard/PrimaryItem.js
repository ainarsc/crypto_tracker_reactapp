import React from "react";
import Paper from "@material-ui/core/Paper";
import LineChart from "../charts/LineChart";
import Grid from "@material-ui/core/Grid";

const PrimaryItem = ({ classNAME, ...props }) => {
  return (
    <Grid item {...props}>
      <Paper className={classNAME}>
        <LineChart />
      </Paper>
    </Grid>
  );
};

export default PrimaryItem;
