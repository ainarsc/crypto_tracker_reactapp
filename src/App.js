import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import ResponsiveDrawer from "./components/navigation/SideDrawer";
import NavBar from "./components/navigation/NavBar";
import { makeStyles } from "@material-ui/core/styles";
import Routes from "./components/routes";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import LoadingCircle from "./components/ui/LoadingCircle";
import { useFirebase } from "./firebase";
import {
  setSession,
  initSession,
  noSession,
  setError
} from "./store/actions/userActions";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    backgroundColor: "#212121"
  }
}));

function App({ session, initSession, setSession, noSession, setError }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const history = useHistory();
  const firebase = useFirebase();

  useEffect(() => {
    initSession();
    const listener = firebase.auth().onAuthStateChanged((user, error) => {
      if (user) {
        setSession(user);
        console.log(`[Session]: <${user.email}> has been signed in`);
        history.push("/dashboard");
      } else if (error) {
        console.log(`[Session]: ${error.message}`);
        setError();
      } else {
        noSession();
        console.log(
          `[Session]: No active session detected, login/registration required`
        );
        // history.push("/");
      }
    });

    return () => listener();
  }, [firebase, initSession, setSession, noSession, history, setError]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const classes = useStyles();

  return !session.fetching || session.isAuthenticated ? (
    <div className={classes.root}>
      <CssBaseline />
      <ResponsiveDrawer
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />
      <NavBar handleDrawerToggle={handleDrawerToggle} />
      <Routes />
    </div>
  ) : (
    <LoadingCircle />
  );
}

const mapDispatch = {
  setError,
  initSession,
  noSession,
  setSession
};
const mapState = state => ({
  session: state.userData
});
export default connect(mapState, mapDispatch)(App);
