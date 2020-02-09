import React from "react";
import Grid from "@material-ui/core/Grid";
import CurrTable from "../charts/Table";

const CurrencyDataTable = ({ classNAME, ...props }) => {
  return (
    <Grid item {...props}>
      <CurrTable />
    </Grid>
  );
};

export default CurrencyDataTable;
