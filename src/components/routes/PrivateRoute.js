import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ component: Component, user, ...rest }) => {
  const { isAuthenticated } = useSelector(state => state.session);
  return (
    <Route
      {...rest}
      render={props => {
        if (isAuthenticated) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/unauthorized",
                state: { from: props.location }
              }}
            />
          );
        }
      }}
    />
  );
};
