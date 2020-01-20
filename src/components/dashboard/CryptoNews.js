import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const CryptoNews = ({ classNAME, ...props }) => {
  return (
    <Grid item {...props}>
      <Paper className={classNAME}>
        <Typography variant="h5">Title</Typography>
        <Typography variant="body1">Foof Fooo Fooo Fooo Foo</Typography>
        <Typography variant="h5">Title</Typography>
        <Typography variant="body1">Foof Fooo Fooo Fooo Foo</Typography>
        <Typography variant="h5">Title</Typography>
        <Typography variant="body1">Foof Fooo Fooo Fooo Foo</Typography>
      </Paper>
    </Grid>
  );
};

export default CryptoNews;
