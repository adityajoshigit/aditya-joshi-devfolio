import { ReactNode } from "react";
import NavItem from "./NavItem";
import classNames from "classnames";

interface INavbarProps {
  children: ReactNode;
  className?: string;
}

function Navbar({
  children,
  className = "",
}: INavbarProps) {
  return (
    <header
      className={classNames(
        className,
        "overflow-y-auto w-full"
      )}>
      <nav className="flex flex-col justify-center items-center mt-2 w-full">
        <ul className="space-y-1 w-full">{children}</ul>
      </nav>
    </header>
  );
}

Navbar.Item = NavItem;

export default Navbar;
