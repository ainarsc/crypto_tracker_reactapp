import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";

import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

import Select from "@material-ui/core/Select";

import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    marginTop: theme.spacing(2),
    minWidth: 200,
    maxWidth: 200,
    height: 100
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: 2
  },
  noLabel: {
    marginTop: theme.spacing(3)
  }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200
    }
  }
};

const cryptos = ["BTC", "ETH", "XRP", "DASH", "EOS", "NEO", "BTV", "THC"];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  };
}

export default function CryptoSelector() {
  const classes = useStyles();
  const theme = useTheme();
  const [crypto, setCrypto] = React.useState([
    "BTC",
    "ETH",
    "XRP",
    "DASH",
    "EOS",
    "NEO"
  ]);

  const handleChange = event => {
    setCrypto(event.target.value);
  };

  return (
    <FormControl className={classes.formControl}>
      <Select
        labelId="demo-mutiple-chip-label"
        id="demo-mutiple-chip"
        multiple
        value={crypto}
        onChange={handleChange}
        input={<Input id="select-multiple-chip" />}
        renderValue={selected => (
          <div className={classes.chips}>
            {selected.map(value => (
              <Chip
                color="secondary"
                key={value}
                label={value}
                className={classes.chip}
              />
            ))}
          </div>
        )}
        MenuProps={MenuProps}
      >
        {cryptos.map(coin => (
          <MenuItem
            key={coin}
            value={coin}
            style={getStyles(coin, crypto, theme)}
          >
            {coin}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
