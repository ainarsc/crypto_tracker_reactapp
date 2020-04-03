import React from "react";
import PropTypes from "prop-types";

import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import SettingsIcon from "@material-ui/icons/Settings";
import PublicIcon from "@material-ui/icons/Public";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import bgSvg from "../../bgSvg.svg";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  toolbar: {
    theme: theme.mixins.toolbar,
    marginLeft: theme.spacing(2)
  },
  drawerPaper: {
    width: drawerWidth,
    // backgroundColor: theme.palette.primary.main
    backgroundImage: `url(${bgSvg})`
  },
  title: {
    flexGrow: 1
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  link: {
    "&hover": {
      textDecoration: "none"
    }
  }
}));

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <Link
          underline="none"
          to={"dashboard"}
          component={RouterLink}
          color="textPrimary"
        >
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary={"dashboard"} />
          </ListItem>
        </Link>

        <Link
          underline="none"
          to={"crypto"}
          component={RouterLink}
          color="textPrimary"
        >
          <ListItem button>
            <ListItemIcon>
              <MonetizationOnIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary={"crypto"} />
          </ListItem>
        </Link>
        <Link
          underline="none"
          to={"stocks"}
          component={RouterLink}
          color="textPrimary"
        >
          <ListItem button>
            <ListItemIcon>
              <ShowChartIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary={"stocks"} />
          </ListItem>
        </Link>

        <Link
          underline="none"
          to={"forex"}
          component={RouterLink}
          color="textPrimary"
        >
          <ListItem button>
            <ListItemIcon>
              <AttachMoneyIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary={"forex"} />
          </ListItem>
        </Link>

        <Link
          underline="none"
          to={"news"}
          component={RouterLink}
          color="textPrimary"
        >
          <ListItem button>
            <ListItemIcon>
              <PublicIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary={"news"} />
          </ListItem>
        </Link>

        <Link
          underline="none"
          to={"preferences"}
          component={RouterLink}
          color="textPrimary"
        >
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary={"preferences"} />
          </ListItem>
        </Link>
      </List>
      <Divider />
    </div>
  );

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden mdUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={props.mobileOpen}
          onClose={props.handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  )
};

export default ResponsiveDrawer;
