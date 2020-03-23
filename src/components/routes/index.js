import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
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
      <Route exact path={BASE}>
        <Landing />
      </Route>
      <Route
        exact
        path={LOGIN}
        render={props => {
          if (!session.userSet) {
            return <Login />;
          } else {
            return (
              <Redirect
                to={{
                  pathname: "/dashboard",
                  state: { from: props.location }
                }}
              />
            );
          }
        }}
      />

      <Route exact path={REGISTER}>
        <Register />
      </Route>
      <PrivateRoute
        exact
        path={DASHBOARD}
        session={session}
        component={Dashboard}
      />

      <Route exact path={UNAUTHORIZED}>
        <Unauthorized />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

const mapState = state => ({
  session: state.userData
});
export default connect(mapState)(Routes);
