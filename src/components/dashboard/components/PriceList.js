import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { connect } from "react-redux";
import _ from "lodash";

const PriceList = ({ styles, data, ...props }) => {
  return (
    data.FULL_DATA !== undefined && (
      <Grid {...props}>
        {_.map(data.FULL_DATA.data, (coin, key) => (
          <Grid key={key} item xs={4} md={2}>
            <Paper className={styles}>
              <Typography variant="title">{`${key}`}</Typography>
              <Divider
                width="100%"
                orientation="horizontal"
                variant="middle"
                flexItem
              />
              <Typography variant="h6">{`$${coin.PRICE}`}</Typography>
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

export default connect(mapState)(PriceList);
