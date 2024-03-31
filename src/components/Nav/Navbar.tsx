import { ReactNode } from "react";
import NavItem from "./NavItem";

interface INavbarProps {
  children: ReactNode;
  className?: string;
}

function Navbar({
  children,
  className = "",
}: INavbarProps) {
  return (
    <header className={className}>
      <nav className="flex flex-col justify-center items-center mt-6">
        <ul>{children}</ul>
      </nav>
    </header>
  );
}

Navbar.Item = NavItem;

export default Navbar;
