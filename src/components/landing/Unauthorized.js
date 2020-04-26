import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100vh",
    margin: "0 auto",
  },
  link: {
    margin: "4px auto",
  },
  button: {
    margin: "4px auto",
    width: 200,
    height: 63,
    color: "white",
  },
}));

const Unauthorized = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Container className={classes.root} maxWidth="sm">
      <Typography align="center" variant="h6" gutterBottom>
        Authorization Required To Proceed
      </Typography>

      <Button
        className={classes.button}
        variant="outlined"
        color="secondary"
        onClick={() => history.push("/")}
      >
        Go To Start
      </Button>
    </Container>
  );
};

export default Unauthorized;
