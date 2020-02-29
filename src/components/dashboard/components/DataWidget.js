import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import _ from "lodash";

const CenteredGrid = ({ data, preferences, styles }) => {
  return (
    data.FULL_DATA !== undefined &&
    !data.FULL_DATA.isFetching && (
      <Container className={styles.dataWidget}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Paper className={styles.widgetContent}>
              <Typography variant="h5" component="h2">
                {`${preferences.currency} Change 24H`}
              </Typography>
              <Typography variant="h5" component="h3">
                {`${_.round(
                  data.FULL_DATA.data.BTC[preferences.currency].CHANGE24HOUR,
                  2
                )}`}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={styles.widgetContent}>
              <Typography variant="h5" component="h2">
                % Change 24H
              </Typography>
              <Typography variant="h5" component="h3">
                {`${_.round(
                  data.FULL_DATA.data.BTC[preferences.currency].CHANGEPCT24HOUR,
                  2
                )}`}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={styles.widgetContent}>
              <Typography variant="h5" component="h2">
                {`${preferences.currency} Change Hour`}
              </Typography>
              <Typography variant="h5" component="h3">
                {`${_.round(
                  data.FULL_DATA.data.BTC[preferences.currency].CHANGEHOUR,
                  2
                )}`}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={styles.widgetContent}>
              <Typography variant="h5" component="h2">
                % Change 1H
              </Typography>
              <Typography variant="h5" component="h3">
                {`${_.round(
                  data.FULL_DATA.data.BTC[preferences.currency].CHANGEPCTHOUR,
                  2
                )}`}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    )
  );
};

const mapState = state => ({
  data: state.dataByCategory,
  preferences: state.dashboardSettings
});

export default connect(mapState)(CenteredGrid);
