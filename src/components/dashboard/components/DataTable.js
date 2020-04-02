import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
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

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    borderColor: theme.palette.secondary.main,
    fontSize: 16
  },
  body: {
    fontSize: 16
  }
}))(TableCell);

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
    width: "auto",
    borderWidth: 1,
    borderColor: theme.palette.divider,
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
            {_.map(getFullData(apiData), (coin, key) => (
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

const mapState = state => ({
  apiData: state.apiData,
  currency: state.apiPreferences.currency
});

export default connect(mapState)(DataTable);
