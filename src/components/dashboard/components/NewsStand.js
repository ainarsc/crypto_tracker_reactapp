import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import escapeRegExp from "../../../utils/escapeRegExp";
import moment from "moment";
import { connect } from "react-redux";
import _ from "lodash";

const NewsStand = ({ data, styles, ...props }) => {
  const { newsCard, bullet, newsTitle, position, newsContent } = styles;
  const bull = <span className={bullet}>•</span>;

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

export default connect(mapState)(NewsStand);
