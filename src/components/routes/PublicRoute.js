import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export const PublicRoute = ({ component: Component, isAuth, ...rest }) => {
  const { isAuthenticated } = useSelector((state) => state.session);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated) {
          return (
            <Redirect
              to={{
                pathname: "/crypto",
                state: { from: props.location },
              }}
            />
          );
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
};
