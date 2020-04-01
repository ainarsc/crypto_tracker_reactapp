import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { getDataPoint } from "../../../store/selectors";
import { isFetched } from "../../../api/useApi";
import _ from "lodash";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    height: 360,
    width: "auto",
    margin: theme.spacing(1),
    padding: 0,
    "& > *": {
      flexGrow: 1,
      width: "50%",
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      color: theme.palette.text.secondary,
      justifyContent: "center",
      borderWidth: 1,
      borderColor: theme.palette.primary.light,
      borderStyle: "solid"
    }
  }
}));

const CenteredGrid = ({ apiData, crypto, currency, styles }) => {
  const classes = useStyles();
  const getStat = indicator =>
    getDataPoint(apiData, crypto, currency, indicator);

  return (
    isFetched(apiData, "FULL_DATA") && (
      <Container className={classes.root}>
        <Paper>
          <Typography variant="h6" component="h2">
            {`Change 24H`}
          </Typography>
          <Typography variant="h6" component="h3">
            {`${currency} ${_.round(getStat("CHANGE24HOUR"), 2)}`}
          </Typography>
        </Paper>

        <Paper>
          <Typography variant="h6" component="h2">
            Change 1 Hour
          </Typography>
          <Typography variant="h6" component="h3">
            {`${currency} ${_.round(getStat("CHANGEHOUR"), 2)}`}
          </Typography>
        </Paper>

        <Paper>
          <Typography variant="h6" component="h2">
            Change 24H
          </Typography>
          <Typography variant="h6" component="h3">
            {`% ${_.round(getStat("CHANGEPCT24HOUR"), 2)}`}
          </Typography>
        </Paper>

        <Paper>
          <Typography variant="h6" component="h2">
            Change 1 Hour
          </Typography>
          <Typography variant="h6" component="h3">
            {`%  ${_.round(getStat("CHANGEPCTHOUR"), 2)}`}
          </Typography>
        </Paper>
      </Container>
    )
  );
};

const mapState = state => ({
  apiData: state.apiData,
  crypto: state.apiPreferences.crypto,
  currency: state.apiPreferences.currency
});

export default connect(mapState)(CenteredGrid);
