import React from "react";
import { Switch, Route } from "react-router-dom";
import { Landing, Login, Register, NotFound, Unauthorized } from "../landing";
import Dashboard from "../dashboard";
import { PrivateRoute } from "./PrivateRoute";
import { connect } from "react-redux";

const BASE = "/";
const LOGIN = "/login";
const REGISTER = "/register";
const DASHBOARD = "/dashboard";
const UNAUTHORIZED = "/unauthorized";

const Routes = ({ session }) => {
  return (
    <Switch>
      <Route exact path={BASE} component={Landing} />
      <Route exact path={LOGIN} component={Login} />
      <Route exact path={REGISTER} component={Register} />
      <PrivateRoute
        exact
        path={DASHBOARD}
        user={session}
        component={Dashboard}
      />
      <Route exact path={UNAUTHORIZED} component={Unauthorized} />
      <Route component={NotFound} />
    </Switch>
  );
};

const mapState = state => ({
  session: state.session
});
export default connect(mapState)(Routes);
