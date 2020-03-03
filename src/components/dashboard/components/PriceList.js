import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { connect } from "react-redux";
import _ from "lodash";

const PriceList = ({ styles, data, preferences }) => {
  return (
    data.FULL_DATA !== undefined &&
    !data.FULL_DATA.isFetching && (
      <Grid container>
        {_.map(preferences.cryptoList, (coin, index) => (
          <Grid key={index} item xs={4} md={2}>
            <Paper className={styles}>
              <Typography variant="h6">{`${coin}`}</Typography>
              <Divider width="100%" orientation="horizontal" variant="middle" />
              <Typography variant="h6">{`${preferences.currency} ${
                data.FULL_DATA.data[coin][preferences.currency].PRICE
              }`}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    )
  );
};

const mapState = state => ({
  data: state.dataByCategory,
  preferences: state.dashboardSettings
});

export default connect(mapState)(PriceList);
