import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

export default function TimeSelector() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="textPrimary"
        centered
      >
        <Tab label="7 days" />
        <Tab label="30 days" />
        <Tab label="6 months" />
        <Tab label="1 year" />
        <Tab label="All" />
      </Tabs>
    </Paper>
  );
}
