import React from "react";
import navMenuItems from "../../data/navigationItems";
import Navbar from "./Navbar";

function Nav() {
  if (!navMenuItems) return null;
  return (
    <Navbar>
      {navMenuItems.map(({ to, label, iconUrl }) => (
        <Navbar.Item
          to={to}
          label={label}
          iconUrl={iconUrl}
        />
      ))}
    </Navbar>
  );
}

export default Nav;
