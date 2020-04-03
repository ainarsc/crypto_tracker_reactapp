import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Tab, Tabs as MuiTabs } from "@material-ui/core";
import _ from "lodash";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

export default function Tabs({ tabNames }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <MuiTabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="textPrimary"
        centered
      >
        {_.map(tabNames, tabName => {
          return <Tab label={tabName} />;
        })}
      </MuiTabs>
    </Paper>
  );
}
