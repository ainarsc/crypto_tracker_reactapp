import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, session, ...rest }) => {
  console.log(session);
  return (
    <Route
      {...rest}
      render={props => {
        if (session.userSet) {
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
