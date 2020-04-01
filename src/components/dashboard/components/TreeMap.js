import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Treemap, ResponsiveContainer } from "recharts";
import { useSelector } from "react-redux";
import { getSelectedCoins } from "../../../store/selectors";

const useStyles = makeStyles(theme => ({
  root: {
    height: 360,
    margin: theme.spacing(1)
  }
}));

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
          stroke="#464646"
          fill="#121212"
        />
      </ResponsiveContainer>
    </Paper>
  );
};

export default MarketCap;
