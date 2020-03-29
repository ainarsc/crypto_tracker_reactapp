import React from "react";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "60%",
    margin: theme.spacing(5)
  }
}));

const Line = () => {
  const classes = useStyles();
  return <Divider className={classes.root} />;
};

export default Line;
