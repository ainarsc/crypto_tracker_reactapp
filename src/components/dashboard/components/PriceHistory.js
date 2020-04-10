import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import Tabs from "../../ui/Tabs";
import { selectHistory } from "../../../store/actions/cryptoActions";
//HELPERS
import {
  getTimeFrom,
  getTimeTo,
  getPriceHistory,
} from "../../../store/selectors";
//MUI IMPORTS
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { LoadingCircleComp } from "../../ui/LoadingCircle";
//RECHARTS COMPONENTS
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

//STYLES
const useStyles = makeStyles((theme) => ({
  root: {
    height: 410,
    margin: theme.spacing(1),
    borderWidth: 1,
    borderColor: theme.palette.divider,
    borderStyle: "solid",
  },
  tooltip: {
    width: 120,
    padding: theme.spacing(1),
    fontSize: 14,
    backgroundColor: "rgba(22, 22, 22, 0.9)",
  },
  loading: {
    height: 410,
    width: "100%",
    margin: theme.spacing(1),
  },
}));

const PriceHistory = () => {
  //STATE
  const data = useSelector((state) => state.apiData);
  const crypto = useSelector((state) => state.apiPreferences.crypto);
  const selected = useSelector((state) => state.cryptoReducer.priceHistory);
  const isFetching = useSelector((state) => state.apiData.HISTORY.isFetching);
  //STYLES
  const classes = useStyles();

  //CUSTOM CHART COMPONENTS
  const TiltedAxisTick = (props) => {
    const { x, y, payload } = props;
    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#fff"
          transform="rotate(-35)"
          interval={5}
        >
          {moment.unix(payload.value).format("YYYY")}
        </text>
      </g>
    );
  };
  const CustomizedYTick = (props) => {
    const { x, y, payload } = props;
    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={3}
          textAnchor="end"
          fill="#fff"

          // transform="rotate(-45)"
        >
          {payload.value}
        </text>
      </g>
    );
  };
  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div className={classes.tooltip}>
          <Typography variant="caption">
            {moment.unix(label).format("DD.MMM")}
          </Typography>
          <Typography color="textSecondary">{`Price: ${payload[0].value}`}</Typography>
        </div>
      );
    }

    return null;
  };
  const timeTabs = [
    { indicator: "ALL", displayName: "All" },
    { indicator: "YEAR", displayName: "1 Year" },
    { indicator: "MONTH", displayName: "1 Month" },
    { indicator: "WEEK", displayName: "7 Days" },
    { indicator: "DAY", displayName: "1 Day" },
  ];
  const LoadingOverlay = (
    <div className={classes.loading}>
      <LoadingCircleComp />
    </div>
  );

  return isFetching ? (
    LoadingOverlay
  ) : (
    <Paper className={classes.root}>
      <Tabs
        action={selectHistory}
        selectedTab={selected}
        tabsArray={timeTabs}
      />
      <ResponsiveContainer height={360}>
        <AreaChart
          data={getPriceHistory(data, crypto)}
          margin={{
            top: 15,
            right: 20,
            left: 0,
            bottom: 23,
          }}
        >
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff1744" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ff1744" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid fill="#131313" stroke="#252525" />

          <XAxis
            dataKey="time"
            name="Time"
            // domain={[getTimeFrom(data, crypto), getTimeTo(data, crypto)]}

            // scale="time"
            // type="number"
            tick={<TiltedAxisTick />}
          />
          <YAxis
            dataKey="close"
            domain={["low", "auto"]}
            tick={<CustomizedYTick />}
            width={50}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area dataKey="close" stroke="#ff1744" fill="url(#colorPv)" />
        </AreaChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default PriceHistory;
