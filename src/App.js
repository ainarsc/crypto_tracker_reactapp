import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import ResponsiveDrawer from "./components/navigation/SideDrawer";
import NavBar from "./components/navigation/NavBar";
import { makeStyles } from "@material-ui/core/styles";
import Routes from "./components/routes";
import { connect } from "react-redux";
import { receiveCurrentUser, initUser } from "./store/actions/userActions";
import { useAuth } from "./firebase";
import LoadingCircle from "./components/ui/LoadingCircle";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    backgroundColor: "#212121"
  }
}));

function App({ userState, initUser, receiveCurrentUser }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  useAuth(initUser, receiveCurrentUser);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const classes = useStyles();

  return userState.loading && userState.uid === null ? (
    <LoadingCircle />
  ) : (
    <div className={classes.root}>
      <CssBaseline />
      <ResponsiveDrawer
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />
      <NavBar handleDrawerToggle={handleDrawerToggle} />
      <Routes />
    </div>
  );
}

const mapDispatch = {
  receiveCurrentUser,
  initUser
};
const mapState = state => ({
  userState: state.userData
});

export default connect(mapState, mapDispatch)(App);
