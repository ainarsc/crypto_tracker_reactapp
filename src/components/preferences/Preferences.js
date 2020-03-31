import React from "react";
import {
  GeneralSettings,
  DashboardSettings,
  AccountSettings
} from "./components";
import Line from "../ui/Line";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexGrow: 1,
    marginTop: 64,
    height: "92vh",
    overflow: "auto"
  }
}));

export const Preferences = () => {
  const classes = useStyles();
  return (
    <main className={classes.root}>
      <GeneralSettings />
      <Line />
      <AccountSettings />
      <Line />

      <DashboardSettings />
    </main>
  );
};
