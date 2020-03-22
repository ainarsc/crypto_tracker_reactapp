import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

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

const NotFound = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="sm">
      <Typography align="center" variant="h6" gutterBottom>
        Page Not Found
      </Typography>
    </Container>
  );
};

export default NotFound;
