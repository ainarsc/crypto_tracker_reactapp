import React from "react";
import { useSelector } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import Routes from "./components/routes";
import { makeStyles } from "@material-ui/core/styles";
import ResponsiveDrawer from "./components/navigation/SideDrawer";
import NavBar from "./components/navigation/NavBar";
import LoadingCircle from "./components/ui/LoadingCircle";
import { useSession } from "./firebase";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    backgroundColor: "#151515"
  }
}));

const App = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const session = useSelector(state => state.userData);
  //Initialize user session
  useSession();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const classes = useStyles();

  return session.fetching ? (
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
};

export default App;
