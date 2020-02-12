import React from "react";
import Paper from "@material-ui/core/Paper";
import MarketCap from "../charts/MarketCap";
import Grid from "@material-ui/core/Grid";

const PrimaryItem = ({ styles, ...props }) => {
  return (
    <Grid item {...props}>
      <Paper className={styles}>
        <MarketCap />
      </Paper>
    </Grid>
  );
};

export default PrimaryItem;
