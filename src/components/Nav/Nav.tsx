import React from "react";
import navMenuItems from "../../data/navigationItems";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Nav() {
  if (!navMenuItems) return null;
  return (
    <Navbar>
      {navMenuItems.map(({ to, label, iconUrl }) => (
        <Navbar.Item>
          <Link to={to}>{label}</Link>
        </Navbar.Item>
      ))}
    </Navbar>
  );
}

export default Nav;
