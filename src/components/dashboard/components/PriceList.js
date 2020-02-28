import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { connect } from "react-redux";
import _ from "lodash";

const PriceList = ({ styles, data, settings }) => {
  return (
    data.FULL_DATA !== undefined && (
      <Grid container>
        {_.map(data.FULL_DATA.data, (coin, key) => (
          <Grid key={key} item xs={4} md={2}>
            <Paper className={styles}>
              <Typography variant="h6">{`${key}`}</Typography>
              <Divider width="100%" orientation="horizontal" variant="middle" />
              <Typography variant="h6">{`$${
                coin[settings.currency].PRICE
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
  settings: state.dashboardSettings
});

export default connect(mapState)(PriceList);
