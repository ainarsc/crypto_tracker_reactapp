import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 90,
      height: 56
    }
  }
}));

export default function CurrencySelector() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState("USD");
  const [open, setOpen] = React.useState(false);

  const handleChange = event => {
    setCurrency(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.root}>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={currency}
          onChange={handleChange}
          variant="outlined"
        >
          <MenuItem value={"USD"}>USD</MenuItem>
          <MenuItem value={"EUR"}>EUR</MenuItem>
          <MenuItem value={"JPY"}>JPY</MenuItem>
          <MenuItem value={"CAD"}>CAD</MenuItem>
          <MenuItem value={"NZD"}>NZD</MenuItem>
          <MenuItem value={"GBP"}>GBP</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
