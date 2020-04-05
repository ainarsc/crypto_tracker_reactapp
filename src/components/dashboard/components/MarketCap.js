import React from "react";
import { useSelector } from "react-redux";
import { selectTreeMap } from "../../../store/actions/cryptoActions";
import { getSelectedCoins } from "../../../store/selectors";
//MUI IMPORTS
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { Treemap, ResponsiveContainer } from "recharts";
//UI IMPORTS
import Tabs from "../../ui/Tabs";

//STYLES
const useStyles = makeStyles((theme) => ({
  root: {
    height: 360,
    margin: theme.spacing(1),
    borderWidth: 1,
    borderColor: theme.palette.divider,
    borderStyle: "solid",
  },
  treeMap: {
    margin: 8,
  },
}));

const MarketCap = () => {
  const data = useSelector((state) => getSelectedCoins(state));
  const selected = useSelector((state) => state.cryptoReducer.treeMap);
  const classes = useStyles();

  //CUSTOM TOOLTIP
  const CustomizedContent = (props) => {
    const { x, y, width, height, name } = props;
    return (
      <g>
        <rect x={x} y={y} width={width} height={height} stroke="#ff1744" />

        <text
          x={x + width / 2}
          y={y + height / 2 + 7}
          textAnchor="middle"
          fill="#fff"
          fontSize={12}
        >
          {name}
        </text>
      </g>
    );
  };
  const displayNames = [
    { indicator: "MKTCAP", displayName: "Market Cap" },
    { indicator: "SUPPLY", displayName: "Supply" },
    { indicator: "VOLUME24HOUR", displayName: "Volume" },
  ];

  return (
    <Paper className={classes.root}>
      <Tabs
        action={selectTreeMap}
        selectedTab={selected}
        tabsArray={displayNames}
      />
      <div className={classes.treeMap}>
        <ResponsiveContainer height={295}>
          <Treemap
            data={data}
            dataKey={selected}
            ratio={1}
            fill="#151515"
            content={<CustomizedContent />}
          />
        </ResponsiveContainer>
      </div>
    </Paper>
  );
};

export default MarketCap;
