import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import {
  getTimeFrom,
  getTimeTo,
  getPriceHistory
} from "../../../store/selectors";
import { isFetched } from "../../../utils/useApi";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const PriceTrend = ({ apiData, crypto }) => {
  const TiltedAxisTick = props => {
    const { x, y, payload } = props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="middle"
          fill="#666"

          // transform="rotate(-45)"
        >
          {moment.unix(payload.value).format("DD.MMM")}
        </text>
      </g>
    );
  };

  return (
    isFetched(apiData, "HISTORY") && (
      <ResponsiveContainer>
        <AreaChart
          data={getPriceHistory(apiData, crypto)}
          margin={{
            top: 10,
            right: 20,
            left: 0,
            bottom: 0
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="time"
            name="Time"
            domain={[getTimeFrom(apiData, crypto), getTimeTo(apiData, crypto)]}
            scale="time"
            type="number"
            interval={5}
            tick={<TiltedAxisTick />}
          />
          <YAxis dataKey="close" domain={["low", "auto"]} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="close"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    )
  );
};

const mapState = state => ({
  apiData: state.apiData,
  crypto: state.apiPreferences.crypto
});

export default connect(mapState)(PriceTrend);
