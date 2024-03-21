import navMenuItems from "../../data/navigationItems";
import Navbar from "./Navbar";
import { Link } from "react-scroll";

function Nav() {
  if (!navMenuItems) return null;
  return (
    <Navbar>
      {navMenuItems.map(({ to, label, iconUrl }) => (
        <Navbar.Item>
          <Link
            to={to}
            smooth
            duration={500}
            label={label}></Link>
        </Navbar.Item>
      ))}
    </Navbar>
  );
}

export default Nav;
