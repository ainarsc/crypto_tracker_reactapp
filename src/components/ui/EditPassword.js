import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 90,
      height: 56
    }
  }
}));

export default function EditPassword() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => setOpen(!open)}
      >
        Edit
      </Button>
    </form>
  );
}
