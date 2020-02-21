import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import useDataFetch from "../../../utils/useDataFetch";
import Divider from "@material-ui/core/Divider";
import { connect } from "react-redux";

const PriceList = ({ styles, ...props }) => {
  const url = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP,BCH,BSV,LTC&tsyms=USD`;
  const [state] = useDataFetch(url);

  return (
    <Grid {...props}>
      {Object.keys(state.payload).map((key, index) => (
        <Grid key={index} item xs={4} md={2}>
          <Paper className={styles}>
            <Typography variant="title">{`${key}`}</Typography>
            <Divider
              width="100%"
              orientation="horizontal"
              variant="middle"
              flexItem
            />
            <Typography variant="h6">{`$${state.payload[key].USD}`}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

const mapState = state => ({
  data: state.dataByCategory
});

export default connect(mapState)(PriceList);
