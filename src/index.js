import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import firebaseServices, { firebaseContext } from "./firebase";
import LoadingScreen from "./components/ui/loadingScreen";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<LoadingScreen />} persistor={persistor}>
      <firebaseContext.Provider value={firebaseServices}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </firebaseContext.Provider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
