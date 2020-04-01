import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import SettingsIcon from "@material-ui/icons/Settings";
import DarkModeToggle from "./Switch";
import CurrencySelect from "./Select";
import { signOut } from "../../firebase";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearSession } from "../../store/actions/sessionActions";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  appBar: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    },
    background: "linear-gradient(to right, #151515, #212121, #151515)"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  toolbar: {
    marginLeft: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  hide: {
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  }
}));

function NavBar(props) {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const currentLocation = history.location.pathname.replace("/", "");

  const handleSignOut = async () => {
    await signOut();
    dispatch(clearSession());
    history.push("/login");
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={props.handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography className={classes.title} variant="h6" noWrap>
          {currentLocation.toUpperCase()}
        </Typography>
        <div className={classes.hide}>
          <CurrencySelect />
        </div>
        <div className={classes.hide}>
          <DarkModeToggle />
        </div>

        <IconButton color="inherit">
          <SettingsIcon />
        </IconButton>
        <IconButton color="inherit" onClick={handleSignOut}>
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

NavBar.propTypes = {
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  )
};

export default NavBar;
