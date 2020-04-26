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
import { getDataPoint } from "../../../store/helpers";
import isEmpty from "lodash/isEmpty";
import map from "lodash/map";
import { nFormatter } from "../../../utils/nFormatter";

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
  const classes = useStyles(),
    marketData = useSelector((state) => state.apiData.MARKET_DATA),
    currency = useSelector((state) => state.apiPreferences.currency),
    isIdle = isEmpty(marketData.data);
  let index = 1;

  //DATA POINT CONSTANTS
  const FROMSYMBOL = "FROMSYMBOL";
  const PRICE = "PRICE";
  const CHANGEPCTHOUR = "CHANGEPCTHOUR";
  const CHANGEPCT24HOUR = "CHANGEPCT24HOUR";
  const TOTALVOLUME24HTO = "TOTALVOLUME24HTO";
  const MKTCAP = "MKTCAP";

  //DATA POINT SELECTOR
  const getStat = (crypto, indicator) => {
    const num = getDataPoint(marketData, crypto, currency, indicator);
    return typeof num === "number" ? nFormatter(num) : num;
  };

  const Ghost = (props) => <Paper className={props.styles} />;
  return isIdle ? (
    <Ghost styles={classes.root} />
  ) : (
    <TableContainer className={classes.root} component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">#</StyledTableCell>
            <StyledTableCell align="right">Coin</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Change 1H (%)</StyledTableCell>
            <StyledTableCell align="right">Change 24H (%)</StyledTableCell>
            <StyledTableCell align="right">Total Vol 24H</StyledTableCell>
            <StyledTableCell align="right">Market Cap</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {map(marketData.data, (coin, key) => (
            <TableRow hover={true} component="tr" key={key} align="right">
              <StyledTableCell component="th" scope="row" align="right">
                {index++}
              </StyledTableCell>
              <StyledTableCell align="right">
                {getStat(key, FROMSYMBOL)}
              </StyledTableCell>
              <StyledTableCell align="right">
                {`$${getStat(key, PRICE)}`}
              </StyledTableCell>
              <StyledTableCell align="right">
                {`${getStat(key, CHANGEPCTHOUR)}`}
              </StyledTableCell>
              <StyledTableCell align="right">
                {`${getStat(key, CHANGEPCT24HOUR)}`}
              </StyledTableCell>
              <StyledTableCell align="right">
                {`$${getStat(key, TOTALVOLUME24HTO)}`}
              </StyledTableCell>
              <StyledTableCell align="right">
                {`$${getStat(key, MKTCAP)}`}
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
