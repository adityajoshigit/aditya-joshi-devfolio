import { ReactNode } from "react";

interface INavItemProps {
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
}

function NavItem({
  className = "",
  children,
  onClick,
}: INavItemProps) {
  return (
    <li
      className={className}
      onClick={() => onClick?.()}>
      {children}
    </li>
  );
}

export default NavItem;
