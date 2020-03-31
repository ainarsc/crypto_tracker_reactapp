import React from "react";
import { Treemap, ResponsiveContainer } from "recharts";
import { useSelector } from "react-redux";
import { getSelectedCoins } from "../../../store/selectors";

const MarketCap = () => {
  const data = useSelector(state => getSelectedCoins(state));

  return (
    <ResponsiveContainer>
      <Treemap
        width="100%"
        height="100%"
        data={data}
        dataKey="value"
        ratio={1}
        stroke="#d32f2f"
        fill="#151515"
      />
    </ResponsiveContainer>
  );
};

export default MarketCap;
