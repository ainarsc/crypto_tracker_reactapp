import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./store";
import firebaseServices, { firebaseContext } from "./firebase";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <firebaseContext.Provider value={firebaseServices}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </firebaseContext.Provider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
