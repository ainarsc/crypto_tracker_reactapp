import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import escapeRegExp from "../../utils/escapeRegExp";
import moment from "moment";
import axios from "axios";
import _ from "lodash";

const NewsStand = ({ styles, ...props }) => {
  const url = `https://min-api.cryptocompare.com/data/v2/news/?lang=EN`;
  const [payload, setPayload] = useState([]);
  const [isFetched, setFetched] = useState(false);
  const { newsCard, bullet, newsTitle, position, newsContent } = styles;

  const bull = <span className={bullet}>•</span>;

  //SORT OUT THE DATA
  const cleanseData = data => {
    const picked = _.take(data, 8); //Take first 8 items from data array

    return _.map(picked, obj =>
      _.pick(obj, ["title", "published_on", "url", "categories", "source_info"])
    );
  };

  //FETCH THE DATA
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url); //return: axios.data
      const cleansed = cleanseData(result.data.Data);

      setPayload(cleansed);
      setFetched(true);
      console.log(cleansed);
    };
    fetchData();
  }, [url]);

  return (
    isFetched && (
      <Grid item {...props}>
        {_.map(payload, data => (
          <Card className={newsCard}>
            <CardContent className={newsContent}>
              <Typography
                className={newsTitle}
                color="textSecondary"
                gutterBottom
              >
                {_.replace(
                  data.categories,
                  new RegExp(escapeRegExp("|"), "g"),
                  " | "
                )}
              </Typography>
              <Typography variant="h5" component="h2">
                {data.title}
              </Typography>
              <Typography className={position} color="textSecondary">
                {data.source_info.name} {bull}{" "}
                {moment.unix(data.date).format("MM.DD.YYYY")}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
    )
  );
};

export default NewsStand;
