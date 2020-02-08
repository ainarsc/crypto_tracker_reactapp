import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 275,
    marginBottom: theme.spacing(1)
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: theme.spacing(0)
  },
  content: {
    padding: theme.spacing(1),
    "&:last-child": {
      paddingBottom: theme.spacing(1)
    }
  }
}));

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          BTC | Business | Market | Asia
        </Typography>
        <Typography variant="h5" component="h2">
          JP Morgan Invests 100M In Blockchain Research
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Coindesk {bull} 07.02.2020
        </Typography>
      </CardContent>
    </Card>
  );
}
