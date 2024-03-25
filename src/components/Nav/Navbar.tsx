import { ReactNode } from "react";
import NavItem from "./NavItem";

interface INavbarProps {
  children: ReactNode;
}

function Navbar({ children }: INavbarProps) {
  return (
    <nav className="mt-6">
      <ul>{children}</ul>
    </nav>
  );
}

Navbar.Item = NavItem;

export default Navbar;
