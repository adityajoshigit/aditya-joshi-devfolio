
import navMenuItems from "../../data/navigationItems";
import Navbar from "./Navbar";


function Nav() {
  if (!navMenuItems) return null;
  return (
    <Navbar>
      {navMenuItems.map(({ label, iconUrl }, index) => (
        <Navbar.Item key={`navbar-item-${index}`}>
          <span>{label}</span>
        </Navbar.Item>
      ))}
    </Navbar>
  );
}

export default Nav;
