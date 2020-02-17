import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import ResponsiveDrawer from "./components/navigation/SideDrawer";
import NavBar from "./components/navigation/NavBar";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Dashboard from "./components/dashboard";
// import useDataFetch from "./components/utils/useDataFetch";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    backgroundColor: "#212121"
  }
}));

let theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#212121",
      dark: "#212121"
    },
    background: {
      paper: "#252525"
    }
  },

  shape: {
    borderRadius: 2
  },
  typography: {
    fontFamily: "monospace"
  },
  spacing: 4
});

theme = responsiveFontSizes(theme);

function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <ResponsiveDrawer
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
        />
        <NavBar handleDrawerToggle={handleDrawerToggle} />
        <Dashboard />
      </div>
    </ThemeProvider>
  );
}

export default App;
