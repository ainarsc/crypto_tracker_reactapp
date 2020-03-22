import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100vh",
    margin: "0 auto"
  },
  link: {
    margin: "4px auto"
  },
  button: {
    width: 200,

    color: "white"
  }
}));

const Unauthorized = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="sm">
      <Typography align="center" variant="h6" gutterBottom>
        Authorization Required To Proceed
      </Typography>

      <Link
        className={classes.link}
        underline="none"
        to={"/"}
        component={RouterLink}
      >
        <Button className={classes.button} variant="outlined" color="secondary">
          Go Back
        </Button>
      </Link>
    </Container>
  );
};

export default Unauthorized;
