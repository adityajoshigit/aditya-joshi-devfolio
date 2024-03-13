import { ReactNode } from "react";

interface INavItemProps {
  children?: ReactNode;
}

function NavItem({ children }: INavItemProps) {
  return <li>{children}</li>;
}

export default NavItem;
