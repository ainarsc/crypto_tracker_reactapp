import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    backgroundColor: "#151515"
  }
}));

const Main = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      {children}
    </div>
  );
};

export default Main;
