import React, { useState } from "react";
import { PieChart, Pie, Cell, Sector, Legend } from "recharts";
import { connect } from "react-redux";
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
      {payload.FROMSYMBOL}
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
         $${_.round(payload.MKTCAP, -7) / 1000000000}B`}
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

const MarketCap = ({ data }) => {
  const [index, setIndex] = useState({ activeIndex: 0 });

  const onPieEnter = (data, index) => {
    setIndex({
      activeIndex: index
    });
  };

  return (
    data.FULL_DATA !== undefined && (
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
          data={data.FULL_DATA.data}
          label={renderCustomizedLabel}
          labelLine={false}
          innerRadius={80}
          outerRadius={130}
          fill="#8884d8"
          dataKey="MKTCAP"
          nameKey="FROMSYMBOL"
        >
          {_.map(data.FULL_DATA.data, (val, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    )
  );
};

const mapState = state => ({
  data: state.dataByCategory
});
export default connect(mapState)(MarketCap);
