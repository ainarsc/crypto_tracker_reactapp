import React from "react";
import {
  GeneralSettings,
  DashboardSettings,
  AccountSettings
} from "./components";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  content: {
    flexGrow: 1,
    marginTop: 68,
    height: "90vh",
    overflow: "auto"
  }
}));

export const Preferences = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <GeneralSettings />
      <DashboardSettings />
      <AccountSettings />
    </main>
  );
};
