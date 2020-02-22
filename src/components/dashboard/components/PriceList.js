import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { connect } from "react-redux";
import { fetchData } from "../../../actions/fetchData";

const PriceList = ({ styles, data, fetchData, ...props }) => {
  const url = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP,BCH,BSV,LTC&tsyms=USD`;

  useEffect(() => {
    fetchData("PRICE", url);
  }, [url, fetchData]);

  return (
    data.PRICE !== undefined && (
      <Grid {...props}>
        {Object.keys(data.PRICE.data).map((key, index) => (
          <Grid key={index} item xs={4} md={2}>
            <Paper className={styles}>
              <Typography variant="title">{`${key}`}</Typography>
              <Divider
                width="100%"
                orientation="horizontal"
                variant="middle"
                flexItem
              />
              <Typography variant="h6">{`$${data.PRICE.data[key].USD}`}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    )
  );
};

const mapState = state => ({
  data: state.dataByCategory
});

export default connect(mapState, { fetchData })(PriceList);
