import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { getDataPoint } from "../../../selectors";
import { isFetched } from "../../../utils/useApi";
import _ from "lodash";

const CenteredGrid = ({ data, preferences, styles }) => {
  const getStat = indicator => getDataPoint(data, preferences, indicator);

  return (
    isFetched(data, "FULL_DATA") && (
      <Container className={styles.dataWidget}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Paper className={styles.widgetContent}>
              <Typography variant="h5" component="h2">
                {`Change 24H`}
              </Typography>
              <Typography variant="h5" component="h3">
                {`${preferences.currency} ${_.round(
                  getStat("CHANGE24HOUR"),
                  2
                )}`}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={styles.widgetContent}>
              <Typography variant="h5" component="h2">
                Change 1 Hour
              </Typography>
              <Typography variant="h5" component="h3">
                {`${preferences.currency} ${_.round(getStat("CHANGEHOUR"), 2)}`}
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
  data: state.dataTypes,
  preferences: state.preferences
});

export default connect(mapState)(CenteredGrid);
