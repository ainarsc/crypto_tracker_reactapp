import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import escapeRegExp from "../../../utils/escapeRegExp";
import { getNews } from "../../../store/selectors";
import { isFetched } from "../../../api/useApi";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import { connect } from "react-redux";
import _ from "lodash";

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 275,
    margin: theme.spacing(1),
    borderWidth: 1,
    borderColor: theme.palette.primary.light,
    borderStyle: "solid"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  newsTitle: {
    fontSize: 14
  },
  newsContent: {
    padding: theme.spacing(2),

    "&:last-child": {
      paddingBottom: theme.spacing(1)
    }
  },
  position: {
    marginBottom: theme.spacing(0)
  }
}));

const NewsStand = ({ apiData }) => {
  const classes = useStyles();

  const bull = <span className={classes.bullet}>•</span>;

  return (
    isFetched(apiData, "NEWS") &&
    _.map(
      getNews(apiData),
      ({ categories, title, source_info, published_on }, key) => (
        <Card key={key} className={classes.root}>
          <CardContent className={classes.newsContent}>
            <Typography
              className={classes.newsTitle}
              color="textSecondary"
              gutterBottom
            >
              {_.replace(categories, new RegExp(escapeRegExp("|"), "g"), " | ")}
            </Typography>
            <Typography variant="h5" component="h2">
              {title}
            </Typography>
            <Typography className={classes.position} color="textSecondary">
              {source_info.name} {bull}{" "}
              {moment.unix(published_on).format("MM.DD.YYYY")}
            </Typography>
          </CardContent>
        </Card>
      )
    )
  );
};

const mapState = state => ({
  apiData: state.apiData
});

export default connect(mapState)(NewsStand);
