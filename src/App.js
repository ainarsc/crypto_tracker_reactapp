import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import ResponsiveDrawer from "./components/navigation/SideDrawer";
import NavBar from "./components/navigation/NavBar";
import { makeStyles } from "@material-ui/core/styles";
import Main from "./components/Main";
// import useDataFetch from "./components/utils/useDataFetch";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  }
}));

function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <ResponsiveDrawer
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />
      <NavBar handleDrawerToggle={handleDrawerToggle} />
      <Main />
    </div>
  );
}

export default App;
