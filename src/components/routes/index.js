import React from "react";
import { Switch, Route } from "react-router-dom";
import { Landing, Login, Register, NotFound, Unauthorized } from "../landing";
import Dashboard from "../dashboard";
import { UnderDevelopment } from "../signedInRoutes/underDevelopment";
import Preferences from "../preferences";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

const BASE = "/";
const LOGIN = "/login";
const REGISTER = "/register";
const HOME = "/home";
const UNAUTHORIZED = "/unauthorized";
const PREFERENCES = "/preferences";
const CRYPTO = "/crypto";
const STOCKS = "/stocks";
const NEWS = "/news";
const FOREX = "/forex";

const Routes = () => {
  return (
    <Switch>
      <PublicRoute exact path={BASE} component={Landing} />
      <PublicRoute exact path={LOGIN} component={Login} />
      <PublicRoute exact path={REGISTER} component={Register} />
      <PrivateRoute exact path={HOME} component={UnderDevelopment} />
      <PrivateRoute exact path={CRYPTO} component={Dashboard} />
      <PrivateRoute exact path={STOCKS} component={UnderDevelopment} />
      <PrivateRoute exact path={NEWS} component={UnderDevelopment} />
      <PrivateRoute exact path={FOREX} component={UnderDevelopment} />
      <PrivateRoute exact path={PREFERENCES} component={Preferences} />
      <PublicRoute exact path={UNAUTHORIZED} component={Unauthorized} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
