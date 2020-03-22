import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import ResponsiveDrawer from "./components/navigation/SideDrawer";
import NavBar from "./components/navigation/NavBar";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
// import Dashboard from "./components/dashboard";
import Register from "./components/landing/Register";
import Login from "./components/landing/Login";
import Landing from "./components/landing/Landing";
import { Provider } from "react-redux";
import configureStore from "./store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import firebaseServices, { firebaseContext } from "./firebase";

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
const store = configureStore();

function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const classes = useStyles();

  return (
    <Router>
      <Provider store={store}>
        <firebaseContext.Provider value={firebaseServices}>
          <ThemeProvider theme={theme}>
            <div className={classes.root}>
              <CssBaseline />
              <ResponsiveDrawer
                handleDrawerToggle={handleDrawerToggle}
                mobileOpen={mobileOpen}
              />
              <NavBar handleDrawerToggle={handleDrawerToggle} />
              <Switch>
                <Route exact path="/">
                  <Landing />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/register">
                  <Register />
                </Route>
                <Route path="/dashboard">{/* <Dashboard /> */}</Route>
              </Switch>
            </div>
          </ThemeProvider>
        </firebaseContext.Provider>
      </Provider>
    </Router>
  );
}

export default App;
