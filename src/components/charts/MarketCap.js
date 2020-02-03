import React, { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Sector } from "recharts";

const data = [
  { name: "BTC", value: 400 },
  { name: "ETC", value: 300 },
  { name: "XTC", value: 300 },
  { name: "EOS", value: 200 }
];

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
         $${payload.value}M`}
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
  const [state, setState] = useState({ activeIndex: 0 });

  const onPieEnter = (data, index) => {
    setState({
      activeIndex: index
    });
  };
  return (
    <ResponsiveContainer>
      <PieChart width={120} height={120}>
        <Pie
          activeIndex={state.activeIndex}
          activeShape={renderActiveShape}
          onMouseEnter={onPieEnter}
          cx="50%"
          cy="50%"
          data={data}
          label={renderCustomizedLabel}
          labelLine={false}
          innerRadius={80}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default MarketCap;

// import React, { PureComponent } from "react";
// import { PieChart, Pie, Sector, Cell, Label } from "recharts";

// const data = [
//   { name: "Group A", value: 400 },
//   { name: "Group B", value: 300 },
//   { name: "Group C", value: 300 },
//   { name: "Group D", value: 200 }
// ];
// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// export default class Example extends PureComponent {
//   static jsfiddleUrl = "https://jsfiddle.net/alidingling/3Leoa7f4/";

//   render() {
//     return (
//       <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>

//         <Pie
//           data={data}
//           cx={100}
//           cy={100}
//           innerRadius={60}
//           outerRadius={80}
//           fill="#8884d8"
//           paddingAngle={5}
//           dataKey="value"
//         >
//           {data.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//           ))}
//           <Label value="Market Cap" offset={0} position="center" />
//         </Pie>
//       </PieChart>
//     );
//   }
// }
