import React from "react";
import {
  GeneralSettings,
  DashboardSettings,
  AccountSettings,
} from "./components";
import Line from "../ui/Line";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  offset: {
    height: 70,
  },
}));

export const Preferences = () => {
  const classes = useStyles();
  return (
    <main className={classes.root}>
      <div className={classes.offset} />
      <GeneralSettings />
      <Line />
      <AccountSettings />
      <Line />

      <DashboardSettings />
    </main>
  );
};
