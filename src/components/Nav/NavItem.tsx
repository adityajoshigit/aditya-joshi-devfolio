import { ReactNode } from "react";

interface INavItemProps {
  className?: string;
  children?: ReactNode;
}

function NavItem({
  className = "",
  children,
}: INavItemProps) {
  return <li className={className}>{children}</li>;
}

export default NavItem;
