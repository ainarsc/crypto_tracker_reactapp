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
import { getDataPoint, isFetched } from "../../../store/helpers";
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
  prct: {
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
    alignItems: "center",
  },
}));

const CenteredGrid = () => {
  const classes = useStyles();
  const data = useSelector((state) => state.apiData);
  const { crypto, currency } = useSelector((state) => state.apiPreferences);
  const { volume, priceChange, mktSupply } = useSelector(
    (state) => state.cryptoReducer
  );

  //GET API DATA VALUES FROM STATE
  const getValues = (indicator) =>
    getDataPoint(data, crypto, currency, indicator);

  const priceChangeTabs = [
    { indicator: "CHANGE24HOUR", displayName: "Δ(24h)" },
    { indicator: "CHANGEHOUR", displayName: "Δ(1h)" },
  ];
  const volumeTabs = [
    { indicator: "VOLUME24HOUR", displayName: "Vol(24h)" },
    { indicator: "VOLUMEHOUR", displayName: "Vol(1h)" },
  ];
  const marketTabs = [
    { indicator: "MKTCAP", displayName: "MKT CAP" },
    { indicator: "SUPPLY", displayName: "Supply" },
  ];

  return (
    isFetched(data, "FULL_DATA") && (
      <Container className={classes.root}>
        <Paper>
          <Tabs
            action={selectChange}
            selectedTab={priceChange}
            tabsArray={priceChangeTabs}
          />
          <div className={classes.content}>
            <Typography variant="h4" component="h3">
              <span className={classes.span}>{currency}</span>
              {`${_.round(getValues(priceChange), 2)}`}
            </Typography>
          </div>
        </Paper>

        <Paper>
          <Tabs
            action={selectVolume}
            selectedTab={volume}
            tabsArray={volumeTabs}
          />
          <div className={classes.content}>
            <Typography variant="h4" component="h3">
              <span className={classes.span}>{currency}</span>
              {`${_.round(getValues(volume), 1) / 1000}M`}
            </Typography>
          </div>
        </Paper>

        <Paper>
          <Tabs
            action={selectMktsupply}
            selectedTab={mktSupply}
            tabsArray={marketTabs}
          />
          <div className={classes.content}>
            <Typography variant="h4" component="h3">
              <span className={classes.span}>{currency}</span>
              {`${_.round(getValues(mktSupply), -7) / 1000000000}B`}
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
              {`${_.round(getValues("OPENDAY"), 2)}`}
            </Typography>
            <Divider />
            <Typography color="textSecondary" variant="caption">
              High
            </Typography>
            <Typography variant="h5" component="h3">
              <span className={classes.span}>{currency}</span>
              {`${_.round(getValues("HIGHDAY"), 2)}`}
            </Typography>
            <Divider />
            <Typography color="textSecondary" variant="caption">
              Low
            </Typography>
            <Typography variant="h5" component="h3">
              <span className={classes.span}>{currency}</span>
              {`${_.round(getValues("LOWDAY"), 2)}`}
            </Typography>
          </div>
        </Paper>
      </Container>
    )
  );
};

export default CenteredGrid;
