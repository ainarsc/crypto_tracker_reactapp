import React, { Fragment } from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import escapeRegExp from "../../../utils/escapeRegExp";
import isEmpty from "lodash/isEmpty";
import map from "lodash/map";
import replace from "lodash/replace";

//MUI IMPORTS
import { Card, CardContent, Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Bullet from "../../ui/Bullet";

//STYLES
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    minHeight: 30,
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
  const news = useSelector((state) => state.apiData.NEWS.data);
  const isIdle = isEmpty(news);
  const classes = useStyles();

  const Ghost = (props) => <div {...props} />;

  return isIdle ? (
    <Fragment>
      <Ghost className={classes.root} />
      <Ghost className={classes.root} />
      <Ghost className={classes.root} />
    </Fragment>
  ) : (
    map(news, ({ categories, title, source_info, url, published_on }, key) => (
      <Link key={key} href={url} target="_blank" rel="noopener">
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="caption" color="textSecondary" gutterBottom>
              {replace(categories, new RegExp(escapeRegExp("|"), "g"), " | ")}
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
    ))
  );

  //END
};

export default NewsStand;
