import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Sector } from "recharts";
import axios from "axios";
import _ from "lodash";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  payload
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      verticalAnchor="middle"
      dominantBaseline="middle"
    >
      {payload.name}
    </text>
  );
};

const renderActiveShape = props => {
  // const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload
  } = props;

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {`Market Cap
         $${payload.marketCap}B`}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
    </g>
  );
};

const MarketCap = () => {
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,BCH,BSV,LTC&&tsyms=USD`;
  const [index, setIndex] = useState({ activeIndex: 0 });
  const [payload, setPayload] = useState([]);
  const [isFetched, setFetched] = useState(false);

  const cleanseData = obj => {
    // d = DISPLAY
    const result = _.mapValues(obj, (val, key) => {
      return {
        name: key,
        price: val.USD.PRICE,
        marketCap: _.round(val.USD.MKTCAP, -7) / 1000000000
      };
    });
    return _.toArray(result); // [{name: "BTC", price: $999, marketCap: $99B}, {name: "BTC", price: $999, marketCap: $99B}, ...]
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      const cleansed = cleanseData(result.data.RAW);

      setPayload(cleansed);

      console.log(cleansed);
      setFetched(true);
    };
    fetchData();
  }, [url]);

  const onPieEnter = (data, index) => {
    setIndex({
      activeIndex: index
    });
  };

  return (
    isFetched === true && (
      <PieChart width={300} height={300}>
        <Pie
          activeIndex={index.activeIndex}
          activeShape={renderActiveShape}
          onMouseEnter={onPieEnter}
          cx="50%"
          cy="50%"
          data={payload}
          label={renderCustomizedLabel}
          labelLine={false}
          innerRadius={80}
          outerRadius={130}
          fill="#8884d8"
          dataKey="marketCap"
        >
          {payload.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    )
  );
};

export default MarketCap;
