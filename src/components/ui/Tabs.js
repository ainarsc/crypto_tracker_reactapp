import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { Paper, Tab, Tabs as MuiTabs } from "@material-ui/core";
import _ from "lodash";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const StyledTab = withStyles((theme) => ({
  root: {
    fontSize: 10,
    minWidth: 12,
    flexGrow: 1,
    [theme.breakpoints.up("xs")]: {
      fontSize: 12,
      minWidth: 15,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 14,
      minWidth: 20,
    },
    [theme.breakpoints.up("md")]: {
      minWidth: 30,
    },
  },
}))((props) => <Tab {...props} />);

export default function Tabs({ action, selectedTab, tabsArray }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [tab, setTab] = useState(selectedTab);

  const handleChange = (event, tabValue) => {
    console.log(tabValue);
    setTab(tabValue);
    dispatch(action(tabValue));
  };

  return (
    <Paper className={classes.root}>
      <MuiTabs
        value={tab}
        onChange={(e, t) => handleChange(e, t)}
        indicatorColor="secondary"
        color="textPrimary"
        centered
      >
        {_.map(tabsArray, (tab, index) => {
          return (
            <StyledTab
              value={tab.indicator}
              label={tab.displayName}
              key={index}
            />
          );
        })}
      </MuiTabs>
    </Paper>
  );
}
