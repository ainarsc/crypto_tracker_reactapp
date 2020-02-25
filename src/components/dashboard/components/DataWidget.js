import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";

const CenteredGrid = ({ data, styles }) => {
  return (
    data.FULL_DATA !== undefined &&
    !data.FULL_DATA.isFetching && (
      <Container className={styles.dataWidget}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Paper className={styles.widgetContent}>
              <Typography variant="h5" component="h2">
                24 Hour Change
              </Typography>
              <Typography variant="h5" component="h3">
                {`$${data.FULL_DATA.data.BTC.PRICE}`}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={styles.widgetContent}>
              <Typography variant="h5" component="h2">
                24 Hour High
              </Typography>
              <Typography variant="h5" component="h3">
                {`$${data.FULL_DATA.data.BTC.PRICE}`}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={styles.widgetContent}>
              <Typography variant="h5" component="h2">
                Net Change
              </Typography>
              <Typography variant="h5" component="h3">
                {`$${data.FULL_DATA.data.BTC.PRICE}`}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={styles.widgetContent}>
              <Typography variant="h5" component="h2">
                24 Hour Open
              </Typography>
              <Typography variant="h5" component="h3">
                {`$${data.FULL_DATA.data.BTC.PRICE}`}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    )
  );
};

const mapState = state => ({
  data: state.dataByCategory
});

export default connect(mapState)(CenteredGrid);
