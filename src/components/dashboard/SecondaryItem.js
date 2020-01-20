import React from "react";
import Paper from "@material-ui/core/Paper";
import ChartPie from "../charts/Pie";
import Grid from "@material-ui/core/Grid";

const PrimaryItem = ({ classNAME, ...props }) => {
  return (
    <Grid item {...props}>
      <Paper className={classNAME}>
        <ChartPie />
      </Paper>
    </Grid>
  );
};

export default PrimaryItem;
