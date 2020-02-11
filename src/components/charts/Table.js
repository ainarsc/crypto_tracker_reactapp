import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import _ from "lodash";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
    width: "auto"
  }
}));

export default function DenseTable() {
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,BCH,BSV,LTC&&tsyms=USD`;
  const [payload, setPayload] = useState([]);
  const [isFetched, setFetched] = useState(false);
  const classes = useStyles();

  const cleanseData = obj => {
    const result = _.map(obj, item =>
      _.pick(item.USD, [
        "FROMSYMBOL",
        "PRICE",
        "CHANGEHOUR",
        "CHANGE24HOUR",
        "TOTALVOLUME24H",
        "MKTCAP"
      ])
    );

    return result;
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      const cleansed = cleanseData(result.data.DISPLAY);

      setPayload(cleansed);

      console.log(cleansed);
      setFetched(true);
    };
    fetchData();
  }, [url]);

  return (
    isFetched && (
      <TableContainer className={classes.root} component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="right">#</TableCell>
              <TableCell align="right">Coin</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Change 1H</TableCell>
              <TableCell align="right">Change 24H</TableCell>
              <TableCell align="right">Total Vol 24H</TableCell>
              <TableCell align="right">Market Cap</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {_.map(payload, (obj, index) => (
              <TableRow align="right">
                <TableCell component="th" scope="row" align="right">
                  {index + 1}
                </TableCell>
                <TableCell align="right">{obj.FROMSYMBOL}</TableCell>
                <TableCell align="right">{obj.PRICE}</TableCell>
                <TableCell align="right">{obj.CHANGEHOUR}</TableCell>
                <TableCell align="right">{obj.CHANGE24HOUR}</TableCell>
                <TableCell align="right">{obj.TOTALVOLUME24H}</TableCell>
                <TableCell align="right">{obj.MKTCAP}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  );
}
