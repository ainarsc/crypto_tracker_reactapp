import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import moment from "moment";
import _ from "lodash";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";

function escapeRegExp(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
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

export default function SimpleCard({ title, url, categories, source, date }) {
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
          {_.replace(categories, new RegExp(escapeRegExp("|"), "g"), " | ")}
        </Typography>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {source.name} {bull} {moment.unix(date).format("MM.DD.YYYY")}
        </Typography>
      </CardContent>
    </Card>
  );
}
