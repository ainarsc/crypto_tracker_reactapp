import React from "react";
import Navigation from "../navigation";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textJustify: "center",
    justifyContent: "center",
    flexGrow: 1,
    marginTop: 70,
    height: "92vh",
    overflow: "auto",
  },
}));

export const UnderDevelopment = () => {
  const classes = useStyles();
  return (
    <Navigation>
      <main className={classes.root}>
        <Typography variant="h6">
          Oh noo, still under development... the sadness :&#40;
        </Typography>
      </main>
    </Navigation>
  );
};
