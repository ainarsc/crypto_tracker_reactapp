import React, { useState, Fragment } from "react";
import NavBar from "./NavBar";
import ResponsiveDrawer from "./SideDrawer";

const Navigation = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <Fragment>
      <ResponsiveDrawer
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />
      <NavBar handleDrawerToggle={handleDrawerToggle} />
      {children}
    </Fragment>
  );
};

export default Navigation;
