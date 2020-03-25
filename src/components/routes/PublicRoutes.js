import React, { Fragment } from "react";
import { Route, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Landing, Login, Register, NotFound, Unauthorized } from "../landing";

const BASE = "/";
const LOGIN = "/login";
const REGISTER = "/register";
const UNAUTHORIZED = "/unauthorized";

const PublicRoutes = () => {
  const { isAuthenticated } = useSelector(state => state.session);
  return (
    <Fragment>
      <Route exact path={BASE} component={Landing} />
      <Route exact path={LOGIN} component={Login} />
      <Route exact path={REGISTER} component={Register} />
      <Route exact path={UNAUTHORIZED} component={Unauthorized} />
      <Route component={NotFound} />
    </Fragment>
  );
};

export default PublicRoutes;
