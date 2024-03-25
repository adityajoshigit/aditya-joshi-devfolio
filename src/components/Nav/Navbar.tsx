import { ReactNode } from "react";
import NavItem from "./NavItem";

interface INavbarProps {
  children: ReactNode;
}

function Navbar({ children }: INavbarProps) {
  return (
    <header>
      <nav className="flex flex-col justify-center items-center mt-6">
        <ul>{children}</ul>
      </nav>
    </header>
  );
}

Navbar.Item = NavItem;

export default Navbar;
