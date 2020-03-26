import React from "react";
import { Switch, Route } from "react-router-dom";
import { Landing, Login, Register, NotFound, Unauthorized } from "../landing";
import Dash from "../dashboard";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

const BASE = "/";
const LOGIN = "/login";
const REGISTER = "/register";
const DASHBOARD = "/dashboard";
const UNAUTHORIZED = "/unauthorized";

const Routes = () => {
  return (
    <Switch>
      <PublicRoute exact path={BASE} component={Landing} />
      <PublicRoute exact path={LOGIN} component={Login} />
      <PublicRoute exact path={REGISTER} component={Register} />
      <PrivateRoute exact path={DASHBOARD} component={Dash} />
      <Route exact path={UNAUTHORIZED} component={Unauthorized} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
