import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  }
}));

export default function Bullet() {
  const classes = useStyles();

  return <span className={classes.root}>•</span>;
}
