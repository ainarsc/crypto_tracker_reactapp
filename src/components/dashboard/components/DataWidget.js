import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: "100%",
    minHeight: 330
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 29
  },
  pos: {
    marginBottom: 12
  }
});

export default function DataWidget() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          variant="h1"
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Bitcoin
        </Typography>
        <Typography variant="h5" component="h2">
          24 Hour Low $10200
        </Typography>
        <Typography variant="h5" component="h2">
          24 Hour High $10400
        </Typography>
        <Typography variant="h5" component="h2">
          Net Change $89.99
        </Typography>
        <Typography variant="h5" component="h2">
          24 Hour Open $10100
        </Typography>
      </CardContent>
    </Card>
  );
}
