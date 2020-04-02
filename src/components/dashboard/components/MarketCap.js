import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Treemap, ResponsiveContainer } from "recharts";
import { useSelector } from "react-redux";
import { getSelectedCoins } from "../../../store/selectors";

const useStyles = makeStyles(theme => ({
  root: {
    height: 360,
    margin: theme.spacing(1),
    borderWidth: 2,
    borderColor: theme.palette.divider,
    borderStyle: "solid"
  }
}));

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

const MarketCap = () => {
  const data = useSelector(state => getSelectedCoins(state));
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <ResponsiveContainer>
        <Treemap
          width="100%"
          height="100%"
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
