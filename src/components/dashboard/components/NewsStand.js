import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import escapeRegExp from "../../../utils/escapeRegExp";
import moment from "moment";
import { connect } from "react-redux";
import { fetchData } from "../../../actions/fetchData";
import _ from "lodash";

const NewsStand = ({ data, fetchData, styles, ...props }) => {
  const { newsCard, bullet, newsTitle, position, newsContent } = styles;
  const bull = <span className={bullet}>•</span>;

  useEffect(() => {
    const url = `https://min-api.cryptocompare.com/data/v2/news/?lang=EN`;
    const keysToPick = [
      "title",
      "published_on",
      "url",
      "categories",
      "source_info"
    ];

    fetchData("NEWS", url, null, null, keysToPick);
  }, [fetchData]);

  return (
    data.NEWS !== undefined && (
      <Grid item {...props}>
        {_.map(data.NEWS.data, article => (
          <Card className={newsCard}>
            <CardContent className={newsContent}>
              <Typography
                className={newsTitle}
                color="textSecondary"
                gutterBottom
              >
                {_.replace(
                  article.categories,
                  new RegExp(escapeRegExp("|"), "g"),
                  " | "
                )}
              </Typography>
              <Typography variant="h5" component="h2">
                {article.title}
              </Typography>
              <Typography className={position} color="textSecondary">
                {article.source_info.name} {bull}{" "}
                {moment.unix(article.published_on).format("MM.DD.YYYY")}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
    )
  );
};

const mapState = state => ({
  data: state.dataByCategory
});

const mapActions = {
  fetchData
};

export default connect(mapState, mapActions)(NewsStand);
