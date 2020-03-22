import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import ResponsiveDrawer from "./components/navigation/SideDrawer";
import NavBar from "./components/navigation/NavBar";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/routes";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    backgroundColor: "#212121"
  }
}));

function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <ResponsiveDrawer
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
        />
        <NavBar handleDrawerToggle={handleDrawerToggle} />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
