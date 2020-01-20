import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CurrTable from "../charts/Table";

const CurrencyDataTable = ({ classNAME, ...props }) => {
  return (
    <Grid item {...props}>
      <Paper className={classNAME}>
        <CurrTable />
      </Paper>
    </Grid>
  );
};

export default CurrencyDataTable;
