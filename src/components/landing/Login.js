import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { signIn } from "../../firebase";

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

const Login = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const firebase = useFirebase();
  // useEffect(() => {
  //   const unsubscribe = firebase.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       console.log("Auth state updated");
  //     } else {
  //       console.log("foo");
  //     }
  //   });
  //   return unsubscribe;
  // }, [firebase]);

  const signInUser = (event, e, p) => {
    event.preventDefault();
    signIn(e, p);
    console.log(`${e} ${p}`);
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
        >
          Sign In
        </Button>
      </form>
    </Container>
  );
};

export default Login;
