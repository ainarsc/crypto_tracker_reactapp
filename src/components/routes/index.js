import React from "react";
import { Switch, Route } from "react-router-dom";
import { Landing, Login, Register } from "../landing";

const BASE = "/";
const LOGIN = "/login";
const REGISTER = "/register";
const DASHBOARD = "/dashboard";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={BASE}>
        <Landing />
      </Route>
      <Route path={LOGIN}>
        <Login />
      </Route>
      <Route path={REGISTER}>
        <Register />
      </Route>
      <Route path={DASHBOARD}>{/* <Dashboard /> */}</Route>
    </Switch>
  );
};

export default Routes;
