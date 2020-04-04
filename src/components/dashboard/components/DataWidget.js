import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Container, Typography, Divider } from "@material-ui/core";
import Tabs from "../../ui/Tabs";
import { useSelector } from "react-redux";
import {
  selectChange,
  selectVolume,
  selectMktsupply,
} from "../../../store/actions/cryptoActions";
import { getDataPoint } from "../../../store/selectors";
import { isFetched } from "../../../api/useApi";
import _ from "lodash";

//STYLES
const useStyles = makeStyles((theme) => ({
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
      borderWidth: 1,
      borderColor: theme.palette.divider,
      borderStyle: "solid",
    },
  },
  span: {
    verticalAlign: "top",
    fontSize: 13,
  },
  content: {
    height: "70%",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  price: {
    height: "100%",
    padding: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
}));

const CenteredGrid = () => {
  const classes = useStyles();
  const data = useSelector((state) => state.apiData);
  const { crypto, currency } = useSelector((state) => state.apiPreferences);
  const { volume, priceChange, mktSupply } = useSelector(
    (state) => state.cryptoReducer
  );

  //DATA POINT SELECTOR
  const getStat = (indicator) =>
    getDataPoint(data, crypto, currency, indicator);

  return (
    isFetched(data, "FULL_DATA") && (
      <Container className={classes.root}>
        <Paper>
          <Tabs
            action={selectChange}
            selectedTab={priceChange}
            tabNames={["Δ(24h)", "Δ(1h)"]}
          />
          <div className={classes.content}>
            <Typography variant="h4" component="h3">
              <span className={classes.span}>{currency}</span>
              {`${_.round(getStat("CHANGE24HOUR"), 2)}`}
            </Typography>
            <Typography variant="h4" component="h3">
              {`% ${_.round(getStat("CHANGEPCT24HOUR"), 2)}`}
            </Typography>
          </div>
        </Paper>

        <Paper>
          <Tabs
            action={selectVolume}
            selectedTab={volume}
            tabNames={["Vol(24h)", "Vol(1h)"]}
          />
          <div className={classes.content}>
            <Typography variant="h4" component="h3">
              <span className={classes.span}>{currency}</span>
              {`${_.round(getStat("CHANGE24HOUR"), 2)}`}
            </Typography>
            <Typography variant="h4" component="h3">
              <span className={classes.span}>{currency}</span>
              {`${_.round(getStat("CHANGEPCT24HOUR"), 2)}`}
            </Typography>
          </div>
        </Paper>

        <Paper>
          <Tabs
            action={selectMktsupply}
            selectedTab={mktSupply}
            tabNames={["MKT CAP", "SUPPLY"]}
          />
          <div className={classes.content}>
            <Typography variant="h3" component="h3">
              <span className={classes.span}>{currency}</span>
              {`${_.round(getStat("CHANGE24HOUR"), 2)}`}
            </Typography>
          </div>
        </Paper>

        <Paper>
          <div className={classes.price}>
            <Typography color="textSecondary" variant="caption">
              Open
            </Typography>
            <Typography variant="h5" component="h3">
              <span className={classes.span}>{currency}</span>
              {`${_.round(getStat("CHANGE24HOUR"), 2)}`}
            </Typography>
            <Divider />
            <Typography color="textSecondary" variant="caption">
              High
            </Typography>
            <Typography variant="h5" component="h3">
              <span className={classes.span}>{currency}</span>
              {`${_.round(getStat("CHANGE24HOUR"), 2)}`}
            </Typography>
            <Divider />
            <Typography color="textSecondary" variant="caption">
              Low
            </Typography>
            <Typography variant="h5" component="h3">
              <span className={classes.span}>{currency}</span>
              {`${_.round(getStat("CHANGE24HOUR"), 2)}`}
            </Typography>
          </div>
        </Paper>
      </Container>
    )
  );
};

export default CenteredGrid;
