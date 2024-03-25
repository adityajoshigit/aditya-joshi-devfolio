import navMenuItems from "../../data/navigationItems";
import { SocialMediaLinks } from "../SocialMediaLinks";
import Navbar from "./Navbar";

function Nav() {
  if (!navMenuItems) return null;
  return (
    <>
      <div className="flex flex-col items-center">
        <img
          src="profile-picture.jpg"
          alt="Profile"
          className="mb-4 rounded-full w-24 h-24"
        />
        <h1 className="font-semibold text-xl">Your Name</h1>
      </div>
      <Navbar>
        {navMenuItems.map(({ to, label }, index) => (
          <Navbar.Item
            className="text-center"
            key={`navitem-${index}-${to}`}>
            <a
              href={`#${to}`}
              className="block py-2">
              {label}
            </a>
          </Navbar.Item>
        ))}
      </Navbar>
      <div className="mt-8">
        <SocialMediaLinks
          orientation="horizontal"
          iconAlignment="center"
        />
      </div>
    </>
  );
}

export default Nav;
