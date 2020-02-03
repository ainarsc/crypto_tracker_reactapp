import React, { useEffect, useState } from "react";
import moment from "moment";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
// import useDataFetch from "../utils/useDataFetch";
import axios from "axios";

const LineChart = () => {
  const url = `https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=30&aggregate=3`;
  const [state, setState] = useState("");
  const [isFetched, setFetched] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      setState(result);
      setFetched(true);
    };
    fetchData();
  }, [url]);

  const TiltedAxisTick = props => {
    const { x, y, payload, ...rest } = props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="middle"
          fill="#666"
          {...rest}
          // transform="rotate(-45)"
        >
          {moment.unix(payload.value).format("DD.MMM")}
        </text>
      </g>
    );
  };

  return (
    isFetched === true && (
      <ResponsiveContainer>
        <AreaChart
          data={state.data.Data.Data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="time"
            name="Time"
            domain={[state.data.Data.TimeFrom, state.data.Data.TimeTo]}
            scale="time"
            type="number"
            interval={4}
            tick={<TiltedAxisTick />}
          />
          <YAxis dataKey="close" domain={[state.data.Data.Data.low, "auto"]} />
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

export default LineChart;
