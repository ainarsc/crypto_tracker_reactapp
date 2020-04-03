import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Paper, Tab, Tabs as MuiTabs } from "@material-ui/core";
import _ from "lodash";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

const StyledTab = withStyles(theme => ({
  root: {
    fontSize: 10,
    minWidth: 12,
    flexGrow: 1,
    [theme.breakpoints.up("xs")]: {
      fontSize: 12,
      minWidth: 15
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 14,
      minWidth: 20
    },
    [theme.breakpoints.up("md")]: {
      minWidth: 30
    }
  }
}))(props => <Tab {...props} />);

export default function Tabs({ tabNames, mini }) {
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
          return <StyledTab label={tabName} />;
        })}
      </MuiTabs>
    </Paper>
  );
}
