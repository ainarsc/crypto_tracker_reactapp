import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, user, ...rest }) => {
  console.log(user);
  return (
    <Route
      {...rest}
      render={props => {
        if (user.loading === false && user.uid) {
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
