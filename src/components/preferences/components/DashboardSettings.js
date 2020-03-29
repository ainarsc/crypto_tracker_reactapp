import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import CurrencySelector from "../../ui/CurrencySelector";
import CryptoSelector from "../../ui/CryptoSelector";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(3),
    width: "40%"
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
}));

const AccountSettings = () => {
  const classes = useStyles();
  //Edit Email address
  //Change Password
  return (
    <Fragment>
      <div className={classes.root}>
        <div className={classes.row}>
          <Typography>Select Currency:</Typography>
          <CurrencySelector />
        </div>
        <div className={classes.row}>
          <Typography>Select Coins:</Typography>
          <CryptoSelector />
        </div>
      </div>
    </Fragment>
  );
};

export default AccountSettings;
