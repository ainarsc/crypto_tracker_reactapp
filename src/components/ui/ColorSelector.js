import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  height: {
    height: 35
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

  const red = clsx(classes.height, classes.color1);
  const green = clsx(classes.height, classes.color2);
  const blue = clsx(classes.height, classes.color3);

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
      <FormControl className={classes.formControl}>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={color}
          onChange={handleChange}
          variant="outlined"
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
