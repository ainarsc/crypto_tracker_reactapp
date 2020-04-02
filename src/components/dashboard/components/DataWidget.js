import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Container, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { getDataPoint } from "../../../store/selectors";
import { isFetched } from "../../../api/useApi";
import _ from "lodash";

//STYLES
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "space-between",
    height: 360,
    width: "auto",
    margin: theme.spacing(1),
    padding: 0,
    "& > *": {
      height: "49%",
      width: "49%",
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      justifyContent: "center",

      borderWidth: 1,
      borderColor: theme.palette.divider,
      borderStyle: "solid"
    }
  },
  span: {
    verticalAlign: "top",
    fontSize: 14
  }
}));

const CenteredGrid = () => {
  const classes = useStyles();
  const data = useSelector(state => state.apiData);
  const { crypto, currency } = useSelector(state => state.apiPreferences);

  //DATA POINT SELECTOR
  const getStat = indicator => getDataPoint(data, crypto, currency, indicator);

  return (
    isFetched(data, "FULL_DATA") && (
      <Container className={classes.root}>
        <Paper>
          <Typography variant="h5" component="h2">
            {`Change 24H`}
          </Typography>
          <Typography color="textSecondary" variant="h3" component="h3">
            <span className={classes.span}>{currency}</span>
            {`${_.round(getStat("CHANGE24HOUR"), 2)}`}
          </Typography>
        </Paper>

        <Paper>
          <Typography variant="h5" component="h2">
            Change 1 Hour
          </Typography>
          <Typography color="textSecondary" variant="h3" component="h3">
            <span className={classes.span}>{currency}</span>
            {`${_.round(getStat("CHANGEHOUR"), 2)}`}
          </Typography>
        </Paper>

        <Paper>
          <Typography variant="h5" component="h2">
            Change 24H
          </Typography>
          <Typography color="textSecondary" variant="h3" component="h3">
            {`%${_.round(getStat("CHANGEPCT24HOUR"), 2)}`}
          </Typography>
        </Paper>

        <Paper>
          <Typography variant="h5" component="h2">
            Change 1 Hour
          </Typography>
          <Typography color="textSecondary" variant="h3" component="h3">
            {`%${_.round(getStat("CHANGEPCTHOUR"), 2)}`}
          </Typography>
        </Paper>
      </Container>
    )
  );
};

export default CenteredGrid;
