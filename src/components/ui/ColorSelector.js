import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 90,
      height: 56
    }
  },
  selectorHeight: {
    height: 50
  },
  color1: {
    backgroundColor: "blue"
  },
  color2: {
    backgroundColor: "red"
  },
  color3: {
    backgroundColor: "green"
  }
}));

export default function ColorSelector() {
  const classes = useStyles();
  const [color, setColor] = React.useState("red");
  const [open, setOpen] = React.useState(false);

  const red = clsx(classes.color1, classes.selectorHeight);
  const green = clsx(classes.color2, classes.selectorHeight);
  const blue = clsx(classes.color3, classes.selectorHeight);

  const handleChange = event => {
    setColor(event.target.value);
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
          value={color}
          onChange={handleChange}
          variant="outlined"
          color="secondary"
        >
          <MenuItem className={red} value={"red"}></MenuItem>
          <MenuItem className={blue} value={"blue"}></MenuItem>
          <MenuItem className={green} value={"green"}></MenuItem>
          <MenuItem className={blue} value={"blue"}></MenuItem>
          <MenuItem className={green} value={"green"}></MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
