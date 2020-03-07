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
import { getFullData } from "../../../selectors";
import { isFetched } from "../../../utils/useApi";
import _ from "lodash";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
    width: "auto"
  }
}));

const DataTable = ({ data, preferences: { currency } }) => {
  const classes = useStyles();
  let index = 1;

  return (
    isFetched(data, "FULL_DATA") && (
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
            {_.map(getFullData(data), (coin, key) => (
              <TableRow key={key} align="right">
                <TableCell component="th" scope="row" align="right">
                  {index++}
                </TableCell>
                <TableCell align="right">{coin[currency].FROMSYMBOL}</TableCell>
                <TableCell align="right">
                  {_.round(coin[currency].PRICE, 2)}
                </TableCell>
                <TableCell align="right">
                  {_.round(coin[currency].CHANGEHOUR, 2)}
                </TableCell>
                <TableCell align="right">
                  {_.round(coin[currency].CHANGE24HOUR, 2)}
                </TableCell>
                <TableCell align="right">
                  {_.round(coin[currency].TOTALVOLUME24H, -7) / 1000000}
                </TableCell>
                <TableCell align="right">
                  {_.round(coin[currency].MKTCAP, -7) / 1000000}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  );
};

const mapState = state => ({
  data: state.dataByCategory,
  preferences: state.dashboardSettings
});

export default connect(mapState)(DataTable);
