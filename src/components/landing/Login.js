import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { signIn } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { initSession, setError } from "../../store/actions/sessionActions";
import {
  ButtonGroup,
  InputAdornment,
  FormControl,
  OutlinedInput,
  InputLabel,
  IconButton,
  Container,
  Typography,
  Button,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100vh",
    margin: "0 auto",
  },

  form: {
    margin: "0 auto",
    width: 250,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",

    margin: theme.spacing(2),
  },
  text: {
    margin: theme.spacing(2),
  },
  margin: {
    margin: theme.spacing(2),
  },
  button: {
    width: 120,
    height: 63,
    alignSelf: "center",
    color: "white",
  },
}));

const Login = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { errorMessage: message } = useSelector((state) => state.session);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const signInUser = async (event, email, password) => {
    event.preventDefault();
    dispatch(initSession());
    const response = await signIn(email, password);
    if (response && response.hasOwnProperty("message")) {
      dispatch(setError(response.message));
    } else if (response.hasOwnProperty("uid")) {
      console.log("[Login]: Sign in successful");
      history.push("/crypto");
    } else {
      dispatch(setError("Something went wrong... the sadness"));
    }
  };

  return (
    <Container className={classes.root} maxWidth="sm">
      <Typography align="center" color="error" gutterBottom>
        {message}
      </Typography>
      <form
        className={classes.form}
        noValidate
        autoComplete="on"
        onSubmit={(event) => signInUser(event, email, password)}
      >
        <Typography align="center" variant="h6" gutterBottom>
          Sing In
        </Typography>
        <FormControl
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
        >
          <InputLabel color="secondary" htmlFor="outlined-email">
            Email
          </InputLabel>
          <OutlinedInput
            required
            id="outlined-email"
            color="secondary"
            label="Email"
            variant="outlined"
            name="email"
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            labelWidth={46}
          />
        </FormControl>

        <FormControl
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
        >
          <InputLabel color="secondary" htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            required
            id="outlined-adornment-password"
            color="secondary"
            label="Password"
            variant="outlined"
            name="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={76}
          />
        </FormControl>
        <ButtonGroup
          className={classes.buttonGroup}
          color="secondary"
          aria-label="outlined secondary button group"
        >
          <Button
            className={classes.button}
            variant="outlined"
            color="secondary"
            onClick={() => history.push("/")}
          >
            Go To Start
          </Button>
          <Button
            className={classes.button}
            variant="outlined"
            color="secondary"
            type="submit"
          >
            Sign In
          </Button>
        </ButtonGroup>
      </form>
    </Container>
  );
};

export default Login;
