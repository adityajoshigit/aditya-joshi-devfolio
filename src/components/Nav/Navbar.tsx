import React, { ReactNode } from "react";
import NavItem from "./NavItem";

interface INavbarProps {
  children: ReactNode;
}

function Navbar({ children }: INavbarProps) {
  return (
    <nav>
      <ul>{children}</ul>
    </nav>
  );
}

Navbar.Item = NavItem;

export default Navbar;
