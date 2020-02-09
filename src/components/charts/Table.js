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

const useStyles = makeStyles({
  table: {
    width: "100%"
  }
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9)
];

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
      const cleansed = cleanseData(result.data.RAW);

      setPayload(cleansed);

      console.log(cleansed);
      setFetched(true);
    };
    fetchData();
  }, [url]);

  return (
    isFetched && (
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              {/* {_.map(payload, (key, value) => (
                <TableCell align="right">{key}</TableCell>
              ))} */}
              <TableCell>#</TableCell>
              <TableCell align="right">Coin</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Change 1H</TableCell>
              <TableCell align="right">Change 24H</TableCell>
              <TableCell align="right">Total Vol 24H</TableCell>
              <TableCell align="right">Market Cap</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))} */}
            {_.map(payload, (obj, index) => (
              <TableRow align="right">
                <TableCell align="right">{index + 1}</TableCell>
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
