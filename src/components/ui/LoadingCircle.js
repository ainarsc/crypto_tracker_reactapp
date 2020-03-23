import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    backgroundColor: "#212121",
    height: "100vh",
    flexDirection: "column",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center"
  }
}));

export default function LoadingCircle() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress color="secondary" />
    </div>
  );
}
