import React from "react";
import DarkModeSwitch from "../../ui/DarkModeSwitch";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: 250
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
}));

const GeneralSettings = () => {
  const classes = useStyles();
  //Dark Theme
  //Colors
  return (
    <div className={classes.root}>
      <div className={classes.row}>
        <Typography>Dark Mode:</Typography>
        <DarkModeSwitch />
      </div>
      <div className={classes.row}>
        <Typography>Color:</Typography>
        <DarkModeSwitch />
      </div>
    </div>
  );
};

export default GeneralSettings;
