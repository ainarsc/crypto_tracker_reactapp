import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  height: { height: 56 }
}));

export default function EditPassword() {
  const classes = useStyles();
  // const [oldPassword, setOldPassword] = useState("");
  // const [password, setPassword] = useState("");
  // const [passwordRepeat, setPasswordRepeat] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <form className={classes.root} noValidate autoComplete="off">
      {/* <TextField
        id="filled-secondary"
        variant="outlined"
        color="secondary"
        type="password"
        InputProps={{ readOnly: readOnly }}
        defaultValue="email.address@mail.com"
      />
      <TextField
        id="filled-secondary"
        variant="outlined"
        color="secondary"
        type="password"
        InputProps={{ readOnly: readOnly }}
        defaultValue="email.address@mail.com"
      />
      <TextField
        id="filled-secondary"
        variant="outlined"
        color="secondary"
        type="password"
        InputProps={{ readOnly: readOnly }}
        defaultValue="email.address@mail.com"
      /> */}
      <Button
        className={classes.height}
        variant="outlined"
        color="secondary"
        onClick={() => setOpen(!open)}
      >
        Edit
      </Button>
    </form>
  );
}
