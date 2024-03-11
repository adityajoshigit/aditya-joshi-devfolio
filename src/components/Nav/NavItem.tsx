import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { INavItemData } from "../../types";

interface INavItemProps extends INavItemData {
  children?: ReactNode;
}

function NavItem({
  label,
  to,
  // iconUrl,
  children,
}: INavItemProps) {
  return (
    <li>
      <Link to={to}>{children || label}</Link>
    </li>
  );
}

export default NavItem;
