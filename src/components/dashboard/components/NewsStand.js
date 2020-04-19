import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import _ from "lodash";
import escapeRegExp from "../../../utils/escapeRegExp";
import { getNews, isFetched } from "../../../store/helpers";
import { useNewsData } from "../../../api/useNewsData";
//MUI IMPORTS
import { Card, CardContent, Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Bullet from "../../ui/Bullet";

//STYLES
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    margin: theme.spacing(1),
    borderWidth: 1,
    borderColor: theme.palette.divider,
    borderStyle: "solid",
    "& > *": {
      padding: theme.spacing(3),
      "&:last-child": {
        paddingBottom: theme.spacing(2),
      },
    },
  },
}));

const NewsStand = () => {
  const data = useSelector((state) => state.apiData);
  const classes = useStyles();
  useNewsData();
  return (
    isFetched(data, "NEWS") &&
    _.map(
      getNews(data),
      ({ categories, title, source_info, url, published_on }, key) => (
        <Link key={key} href={url} target="_blank" rel="noopener">
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="caption" color="textSecondary" gutterBottom>
                {_.replace(
                  categories,
                  new RegExp(escapeRegExp("|"), "g"),
                  " | "
                )}
              </Typography>
              <Typography variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="caption">
                {source_info.name} <Bullet />{" "}
                {moment.unix(published_on).format("MM.DD.YYYY")}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      )
    )
  );
};

export default NewsStand;
