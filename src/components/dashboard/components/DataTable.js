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
import { getFullData, getDataPoint } from "../../../store/selectors";
import { isFetched } from "../../../api/useApi";
import _ from "lodash";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
    width: "auto",
    borderWidth: 1,
    borderColor: theme.palette.primary.light,
    borderStyle: "solid"
  }
}));

const DataTable = ({ apiData, currency }) => {
  const classes = useStyles();
  let index = 1;
  const FROMSYMBOL = "FROMSYMBOL";
  const PRICE = "PRICE";
  const CHANGEHOUR = "CHANGEHOUR";
  const CHANGE24HOUR = "CHANGE24HOUR";
  const TOTALVOLUME24H = "TOTALVOLUME24H";
  const MKTCAP = "MKTCAP";

  const getStat = (crypto, indicator) =>
    getDataPoint(apiData, crypto, currency, indicator);

  return (
    isFetched(apiData, "FULL_DATA") && (
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
            {_.map(getFullData(apiData), (coin, key) => (
              <TableRow key={key} align="right">
                <TableCell component="th" scope="row" align="right">
                  {index++}
                </TableCell>
                <TableCell align="right">{getStat(key, FROMSYMBOL)}</TableCell>
                <TableCell align="right">
                  {_.round(getStat(key, PRICE), 2)}
                </TableCell>
                <TableCell align="right">
                  {_.round(getStat(key, CHANGEHOUR), 2)}
                </TableCell>
                <TableCell align="right">
                  {_.round(getStat(key, CHANGE24HOUR), 2)}
                </TableCell>
                <TableCell align="right">
                  {_.round(getStat(key, TOTALVOLUME24H), -7) / 1000000}
                </TableCell>
                <TableCell align="right">
                  {_.round(getStat(key, MKTCAP), -7) / 1000000}
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
  apiData: state.apiData,
  currency: state.apiPreferences.currency
});

export default connect(mapState)(DataTable);
