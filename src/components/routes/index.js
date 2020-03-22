import React from "react";
import { Switch, Route } from "react-router-dom";
import { Landing, Login, Register, NotFound, Unauthorized } from "../landing";
import Dashboard from "../dashboard";
import { PrivateRoute } from "./PrivateRoute";

const BASE = "/";
const LOGIN = "/login";
const REGISTER = "/register";
const DASHBOARD = "/dashboard";
const UNAUTHORIZED = "/unauthorized";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={BASE}>
        <Landing />
      </Route>
      <Route exact path={LOGIN}>
        <Login />
      </Route>
      <Route exact path={REGISTER}>
        <Register />
      </Route>
      <PrivateRoute exact path={DASHBOARD} component={Dashboard} />

      <Route exact path={UNAUTHORIZED}>
        <Unauthorized />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
