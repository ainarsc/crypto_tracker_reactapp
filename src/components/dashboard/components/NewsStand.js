import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import escapeRegExp from "../../../utils/escapeRegExp";
import { getNews } from "../../../selectors";
import { isFetched } from "../../../utils/useApi";
import moment from "moment";
import { connect } from "react-redux";
import _ from "lodash";

const NewsStand = ({ data, styles }) => {
  const { newsCard, bullet, newsTitle, position, newsContent } = styles;
  const bull = <span className={bullet}>•</span>;

  return (
    isFetched(data, "NEWS") && (
      <Grid item xs={12}>
        {_.map(
          getNews(data),
          ({ categories, title, source_info, published_on }, key) => (
            <Card key={key} className={newsCard}>
              <CardContent className={newsContent}>
                <Typography
                  className={newsTitle}
                  color="textSecondary"
                  gutterBottom
                >
                  {_.replace(
                    categories,
                    new RegExp(escapeRegExp("|"), "g"),
                    " | "
                  )}
                </Typography>
                <Typography variant="h5" component="h2">
                  {title}
                </Typography>
                <Typography className={position} color="textSecondary">
                  {source_info.name} {bull}{" "}
                  {moment.unix(published_on).format("MM.DD.YYYY")}
                </Typography>
              </CardContent>
            </Card>
          )
        )}
      </Grid>
    )
  );
};

const mapState = state => ({
  data: state.dataTypes
});

export default connect(mapState)(NewsStand);
