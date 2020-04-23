import React from "react";
import { useSelector } from "react-redux";
import { selectTreeMap } from "../../../store/actions/cryptoActions";
import { getSelectedCoins } from "../../../store/selectors";
import isEmpty from "lodash/isEmpty";
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
  const coins = useSelector((state) => getSelectedCoins(state)),
    selected = useSelector((state) => state.cryptoReducer.treeMap),
    classes = useStyles(),
    marketData = useSelector((state) => state.apiData.MARKET_DATA),
    isIdle = isEmpty(marketData.data);
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
  const Ghost = (props) => <Paper className={props.styles} />;

  return isIdle ? (
    <Ghost styles={classes.root} />
  ) : (
    <Paper className={classes.root}>
      <Tabs
        action={selectTreeMap}
        selectedTab={selected}
        tabsArray={displayNames}
      />
      <div className={classes.treeMap}>
        <ResponsiveContainer height={295}>
          <Treemap
            data={coins}
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
