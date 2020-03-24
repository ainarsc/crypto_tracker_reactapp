import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { signIn } from "../../firebase";
import { connect } from "react-redux";

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
    width: 250,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  text: {
    margin: theme.spacing(2)
  },
  button: {
    margin: theme.spacing(2),
    width: 150,
    alignSelf: "center",
    color: "white"
  }
}));

const Login = ({ session }) => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const signInUser = async (event, email, password) => {
    event.preventDefault();
    const res = await signIn(email, password);
    if (res && res.hasOwnProperty("message")) {
      setMessage(res.message);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <Container className={classes.root} maxWidth="sm">
      <form
        className={classes.form}
        noValidate
        autoComplete="on"
        onSubmit={event => signInUser(event, email, password)}
      >
        <Typography align="center" variant="h6" gutterBottom>
          {message}
        </Typography>
        <Typography align="center" variant="h6" gutterBottom>
          Login
        </Typography>
        <TextField
          className={classes.text}
          id="outlined-secondary"
          label="Email Address"
          variant="outlined"
          color="secondary"
          type="text"
          placeholder="Email address"
          name="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <TextField
          className={classes.text}
          id="outlined-secondary"
          label="Password"
          variant="outlined"
          color="secondary"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />

        <Button
          className={classes.button}
          variant="outlined"
          color="secondary"
          type="submit"
          // onClick={() => history.push("/dashboard")}
        >
          Sign In
        </Button>
      </form>
    </Container>
  );
};

const mapState = state => {
  return { session: state.userData };
};

export default connect(mapState)(Login);
