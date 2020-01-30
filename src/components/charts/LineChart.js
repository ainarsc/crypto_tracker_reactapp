import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import useDataFetch from "../utils/useDataFetch";
import axios from "axios";

// const data = [
//   {
//     name: "Jan",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400
//   },
//   {
//     name: "Feb",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210
//   },
//   {
//     name: "Mar",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290
//   },
//   {
//     name: "Apr",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000
//   },
//   {
//     name: "May",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181
//   },
//   {
//     name: "Jun",
//     uv: 2390,
//     pv: 3800,
//     amt: 2500
//   },
//   {
//     name: "Jul",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100
//   }
// ];

const LineChart = () => {
  const url = `https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=30&aggregate=2&e=CCCAGG`;
  const [state, setState] = useState("");
  const [isFetched, setFetched] = useState(false);
  // const [state] = useDataFetch(url);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      setState(result);
      setFetched(true);
    };
    fetchData();
  }, []);

  return (
    isFetched === true && (
      <ResponsiveContainer>
        <AreaChart
          width={500}
          height={400}
          data={state.data.Data.Data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis dataKey="close" />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    )
  );
};

export default LineChart;
