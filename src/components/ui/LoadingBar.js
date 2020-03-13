import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: 16,
    "& > * + *": {
      marginTop: theme.spacing(2)
    }
  }
}));

function LoadingBar({ apiData }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LinearProgress color="secondary" />
    </div>
  );
}

const mapState = state => ({
  apiData: state.apiData
});

export default connect(mapState)(LoadingBar);
