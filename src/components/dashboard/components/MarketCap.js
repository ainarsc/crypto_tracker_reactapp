import React, { useState } from "react";
import { PieChart, Pie, Cell, Sector, Legend } from "recharts";
import { connect } from "react-redux";
import { isFetched } from "../../../api/useApi";
import _ from "lodash";
import { getSelectedCoins } from "../../../store/selectors";

const MarketCap = ({ apiData, cryptoList, currency }) => {
  const [index, setIndex] = useState({ activeIndex: 0 });
  const COLORS = [
    "#ca000e",
    "#eaa600",
    "#f72b1a",
    "#f2d840",
    "#f49390",
    "#f0c036"
  ];
  const RADIAN = Math.PI / 180;

  const onPieEnter = (empty, index) => {
    setIndex({
      activeIndex: index
    });
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
           ${currency} ${_.round(payload[currency].MKTCAP, -7) / 1000000000}B`}
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
        dominantBaseline="middle"
      >
        {payload[currency].FROMSYMBOL}
      </text>
    );
  };

  return (
    isFetched(apiData, "FULL_DATA") && (
      <PieChart width={330} height={330}>
        <Legend
          wrapperStyle={{ top: 0 }}
          verticalAlign="top"
          layout="horizontal"
          align="center"
        />
        <Pie
          activeIndex={index.activeIndex}
          activeShape={renderActiveShape}
          onMouseEnter={onPieEnter}
          cx="50%"
          cy="50%"
          data={cryptoList}
          label={renderCustomizedLabel}
          labelLine={false}
          innerRadius={80}
          outerRadius={130}
          fill="#8884d8"
          dataKey={`${currency}.MKTCAP`}
          nameKey={`${currency}.FROMSYMBOL`}
        >
          {_.map(cryptoList, (_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    )
  );
};

const mapState = state => ({
  apiData: state.apiData,
  currency: state.apiPreferences.currency,
  cryptoList: getSelectedCoins(state)
});

export default connect(mapState)(MarketCap);
