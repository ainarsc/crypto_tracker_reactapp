import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: theme.palette.background.default,
  },
}));

const LoadingScreen = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h1" color="secondary" component="h1">
        market tracker
      </Typography>
    </div>
  );
};

export default LoadingScreen;
