import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import _ from "lodash";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
    width: "auto"
  }
}));

const DataTable = ({ data }) => {
  const classes = useStyles();

  return (
    data.FULL_DATA !== undefined && (
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
            {_.map(data.FULL_DATA.data, (coin, index) => (
              <TableRow key={index} align="right">
                <TableCell component="th" scope="row" align="right">
                  {index + 1}
                </TableCell>
                <TableCell align="right">{coin.FROMSYMBOL}</TableCell>
                <TableCell align="right">{coin.PRICE}</TableCell>
                <TableCell align="right">{coin.CHANGEHOUR}</TableCell>
                <TableCell align="right">{coin.CHANGE24HOUR}</TableCell>
                <TableCell align="right">{coin.TOTALVOLUME24H}</TableCell>
                <TableCell align="right">{coin.MKTCAP}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  );
};

const mapState = state => ({
  data: state.dataByCategory
});

export default connect(mapState)(DataTable);
