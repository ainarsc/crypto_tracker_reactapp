import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { isFetched, getFullData, getDataPoint } from "../../../store/helpers";
import _ from "lodash";

//STYLES

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#131313",
    borderColor: theme.palette.secondary.main,
    fontSize: 16,
  },
  body: {
    fontSize: 16,
  },
}))(TableCell);
const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    width: "auto",
    borderWidth: 1,
    borderColor: theme.palette.divider,
    borderStyle: "solid",
  },
}));

const DataTable = () => {
  const classes = useStyles();
  const data = useSelector((state) => state.apiData);
  const currency = useSelector((state) => state.apiPreferences.currency);
  let index = 1;

  //DATA POINT CONSTANTS
  const FROMSYMBOL = "FROMSYMBOL";
  const PRICE = "PRICE";
  const CHANGEHOUR = "CHANGEHOUR";
  const CHANGE24HOUR = "CHANGE24HOUR";
  const TOTALVOLUME24H = "TOTALVOLUME24H";
  const MKTCAP = "MKTCAP";

  //DATA POINT SELECTOR
  const getStat = (crypto, indicator) =>
    getDataPoint(data, crypto, currency, indicator);

  return (
    isFetched(data, "MARKET_DATA") && (
      <TableContainer className={classes.root} component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="right">#</StyledTableCell>
              <StyledTableCell align="right">Coin</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
              <StyledTableCell align="right">Change 1H</StyledTableCell>
              <StyledTableCell align="right">Change 24H</StyledTableCell>
              <StyledTableCell align="right">Total Vol 24H</StyledTableCell>
              <StyledTableCell align="right">Market Cap</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {_.map(getFullData(data), (coin, key) => (
              <TableRow key={key} align="right">
                <StyledTableCell component="th" scope="row" align="right">
                  {index++}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {getStat(key, FROMSYMBOL)}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {_.round(getStat(key, PRICE), 2)}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {_.round(getStat(key, CHANGEHOUR), 2)}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {_.round(getStat(key, CHANGE24HOUR), 2)}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {_.round(getStat(key, TOTALVOLUME24H), -7) / 1000000}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {_.round(getStat(key, MKTCAP), -7) / 1000000}
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  );
};

export default DataTable;
