import React, { Fragment } from "react";
import DarkModeSwitch from "../../ui/DarkModeSwitch";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import ColorSelector from "../../ui/ColorSelector";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(3),
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
    <Fragment>
      <div className={classes.root}>
        <div className={classes.row}>
          <Typography>Dark Mode:</Typography>
          <DarkModeSwitch />
        </div>
        <div className={classes.row}>
          <Typography>Color:</Typography>
          <ColorSelector />
        </div>
      </div>
    </Fragment>
  );
};

export default GeneralSettings;
