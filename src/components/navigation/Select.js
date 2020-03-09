import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { connect } from "react-redux";
import { setCurrency } from "../../actions/setPreferences";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginBottom: theme.spacing(3)
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const CurrencySelect = ({ preferences, setCurrency }) => {
  const classes = useStyles();

  const handleChange = event => {
    setCurrency(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          value={preferences.currency}
          onChange={handleChange}
          className={classes.selectEmpty}
        >
          <MenuItem value={"USD"}>USD</MenuItem>
          <MenuItem value={"EUR"}>EUR</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

const mapState = state => ({ preferences: state.preferences });

const mapActions = {
  setCurrency
};

export default connect(mapState, mapActions)(CurrencySelect);
