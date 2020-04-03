import React from "react";
import { Switch, Route } from "react-router-dom";
import { Landing, Login, Register, NotFound, Unauthorized } from "../landing";
import Dashboard from "../dashboard";
import Preferences from "../preferences";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

const BASE = "/";
const LOGIN = "/login";
const REGISTER = "/register";
const DASHBOARD = "/dashboard";
const UNAUTHORIZED = "/unauthorized";
const PREFERENCES = "/preferences";
const CRYPTO = "/crypto";
const STOCKS = "/stocks";
const COMMODITIES = "/commodities";
const FOREX = "/forex";

const Routes = () => {
  return (
    <Switch>
      <PublicRoute exact path={BASE} component={Landing} />
      <PublicRoute exact path={LOGIN} component={Login} />
      <PublicRoute exact path={REGISTER} component={Register} />
      <Route exact path={DASHBOARD} component={Dashboard} />
      <PrivateRoute exact path={PREFERENCES} component={Preferences} />
      <Route exact path={UNAUTHORIZED} component={Unauthorized} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
