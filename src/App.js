import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import ResponsiveDrawer from "./components/navigation/SideDrawer";
import NavBar from "./components/navigation/NavBar";
import { makeStyles } from "@material-ui/core/styles";
import Routes from "./components/routes";
import { connect } from "react-redux";
import {
  receiveCurrentUser,
  initUser,
  noUserSignedIn
} from "./store/actions/userActions";
import LoadingCircle from "./components/ui/LoadingCircle";
import { useFirebase } from "./firebase";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    backgroundColor: "#212121"
  }
}));

function App({ session, initUser, receiveCurrentUser, noUserSignedIn }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const firebase = useFirebase();

  useEffect(() => {
    initUser();
    const listener = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        receiveCurrentUser(user);
        console.log("[AUTH]: User Signed In");

        return listener;
      } else {
        noUserSignedIn();
        console.log("[AUTH]: No User");
      }
    });

    return () => listener(); //By calling onauthstatechanged it returns unsubscribe, check docs
  }, [firebase, initUser, receiveCurrentUser, noUserSignedIn]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const classes = useStyles();

  return session.loading && !session.userSet ? (
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
  initUser,
  noUserSignedIn
};
const mapState = state => ({
  session: state.userData
});

export default connect(mapState, mapDispatch)(App);
