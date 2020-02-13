import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

export default function CenteredGrid({ styles }) {
  return (
    <Container className={styles.dataWidget}>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Paper className={styles.widgetContent}>
            <Typography variant="h5" component="h2">
              24 Hour Low
            </Typography>
            <Typography variant="h5" component="h3">
              $10200
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={styles.widgetContent}>
            <Typography variant="h5" component="h2">
              24 Hour High
            </Typography>
            <Typography variant="h5" component="h3">
              $10200
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={styles.widgetContent}>
            <Typography variant="h5" component="h2">
              Net Change
            </Typography>
            <Typography variant="h5" component="h3">
              $89.99
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={styles.widgetContent}>
            <Typography variant="h5" component="h2">
              24 Hour Open
            </Typography>
            <Typography variant="h5" component="h3">
              $10100
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
