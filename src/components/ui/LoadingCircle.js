import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#212121",
    height: "100vh",
    flexDirection: "column",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  small: {
    display: "flex",
    backgroundColor: theme.palette.background.paper,
    height: "100%",
    flexDirection: "column",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export const LoadingCircleComp = () => {
  const classes = useStyles();
  return (
    <div className={classes.small}>
      <CircularProgress color="secondary" />
    </div>
  );
};

export default function LoadingCircle() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress color="secondary" />
    </div>
  );
}
