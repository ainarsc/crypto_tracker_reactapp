import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import escapeRegExp from "../../../utils/escapeRegExp";
import { getNews } from "../../../store/selectors";
import { isFetched } from "../../../api/useApi";
import Bullet from "../../ui/Bullet";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import { connect } from "react-redux";
import _ from "lodash";

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 275,
    margin: theme.spacing(1),

    borderWidth: 1,
    borderColor: theme.palette.divider,
    borderStyle: "solid",
    "& > *": {
      padding: theme.spacing(2),
      "&:last-child": {
        paddingBottom: theme.spacing(1)
      }
    }
  }
}));

const NewsStand = ({ apiData }) => {
  const classes = useStyles();

  return (
    isFetched(apiData, "NEWS") &&
    _.map(
      getNews(apiData),
      ({ categories, title, source_info, published_on }, key) => (
        <Card key={key} className={classes.root}>
          <CardContent>
            <Typography variant="caption" color="textSecondary" gutterBottom>
              {_.replace(categories, new RegExp(escapeRegExp("|"), "g"), " | ")}
            </Typography>
            <Typography variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="caption" color="textPrimary">
              {source_info.name} <Bullet />{" "}
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
