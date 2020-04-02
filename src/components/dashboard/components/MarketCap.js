import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";
import { Treemap, ResponsiveContainer } from "recharts";
import { useSelector } from "react-redux";
import { getSelectedCoins } from "../../../store/selectors";

//STYLES
const useStyles = makeStyles(theme => ({
  root: {
    height: 360,
    margin: theme.spacing(1),
    borderWidth: 1,
    borderColor: theme.palette.divider,
    borderStyle: "solid",
    padding: theme.spacing(5)
  }
}));

const MarketCap = () => {
  const data = useSelector(state => getSelectedCoins(state));
  const classes = useStyles();

  //CUSTOM TOOLTIP
  const CustomizedContent = props => {
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

  return (
    <Paper className={classes.root}>
      <div>
        <Typography variant="subtitle1">Market Cap</Typography>
      </div>
      <ResponsiveContainer height={310}>
        <Treemap
          width="80%"
          height="70%"
          data={data}
          dataKey="value"
          ratio={1}
          fill="#151515"
          content={<CustomizedContent />}
        />
      </ResponsiveContainer>
    </Paper>
  );
};

export default MarketCap;
