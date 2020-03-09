import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { getDataPoint } from "../../../store/selectors";
import { isFetched } from "../../../utils/useApi";
import _ from "lodash";

const CenteredGrid = ({ apiData, crypto, currency, styles }) => {
  const getStat = indicator =>
    getDataPoint(apiData, crypto, currency, indicator);

  return (
    isFetched(apiData, "FULL_DATA") && (
      <Container className={styles.dataWidget}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Paper className={styles.widgetContent}>
              <Typography variant="h5" component="h2">
                {`Change 24H`}
              </Typography>
              <Typography variant="h5" component="h3">
                {`${currency} ${_.round(getStat("CHANGE24HOUR"), 2)}`}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={styles.widgetContent}>
              <Typography variant="h5" component="h2">
                Change 1 Hour
              </Typography>
              <Typography variant="h5" component="h3">
                {`${currency} ${_.round(getStat("CHANGEHOUR"), 2)}`}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={styles.widgetContent}>
              <Typography variant="h5" component="h2">
                Change 24H
              </Typography>
              <Typography variant="h5" component="h3">
                {`% ${_.round(getStat("CHANGEPCT24HOUR"), 2)}`}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={styles.widgetContent}>
              <Typography variant="h5" component="h2">
                Change 1 Hour
              </Typography>
              <Typography variant="h5" component="h3">
                {`%  ${_.round(getStat("CHANGEPCTHOUR"), 2)}`}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    )
  );
};

const mapState = state => ({
  apiData: state.apiData,
  crypto: state.apiPreferences.crypto,
  currency: state.apiPreferences.currency
});

export default connect(mapState)(CenteredGrid);
