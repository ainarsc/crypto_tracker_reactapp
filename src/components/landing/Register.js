import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100vh",
    margin: "0 auto"
  },

  form: {
    margin: "0 auto",
    width: 250
  },
  text: {
    margin: theme.spacing(2)
  }
}));

const Register = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="sm">
      <form className={classes.form} noValidate autoComplete="on">
        <Typography align="center" variant="h6" gutterBottom>
          Register Profile
        </Typography>
        <TextField
          className={classes.text}
          id="outlined-secondary"
          label="Email Address"
          variant="outlined"
          color="secondary"
        />
        <TextField
          className={classes.text}
          id="outlined-secondary"
          label="Password"
          variant="outlined"
          color="secondary"
        />
        <TextField
          className={classes.text}
          id="outlined-secondary"
          label="Repeat Password"
          variant="outlined"
          color="secondary"
        />
      </form>
    </Container>
  );
};

export default Register;
