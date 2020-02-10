import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import ResponsiveDrawer from "./components/navigation/SideDrawer";
import NavBar from "./components/navigation/NavBar";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Main from "./components/Main";
// import useDataFetch from "./components/utils/useDataFetch";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  }
}));

const darkTheme = createMuiTheme({
  palette: {
    type: "dark"
  },
  shape: {
    borderRadius: 2
  },
  typography: {
    fontFamily: "monospace"
  },
  spacing: 4
});

function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const classes = useStyles();

  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.root}>
        <CssBaseline />
        <ResponsiveDrawer
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
        />
        <NavBar handleDrawerToggle={handleDrawerToggle} />
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
