import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import TextInput from "../../ui/TextInput";
import EditPassword from "../../ui/EditPassword";

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
          <Typography>Change Email Address:</Typography>
          <TextInput />
        </div>
        <div className={classes.row}>
          <Typography>Change Password:</Typography>
          <EditPassword />
        </div>
        <div className={classes.row}>
          <Typography>Delete Account:</Typography>
          <EditPassword />
        </div>
      </div>
    </Fragment>
  );
};

export default AccountSettings;
