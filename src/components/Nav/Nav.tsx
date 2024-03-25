import navMenuItems from "../../data/navigationItems";
import Navbar from "./Navbar";

function Nav() {
  if (!navMenuItems) return null;
  return (
    <>
      <div className="flex flex-col items-center">
        <img
          src="profile-picture.jpg"
          alt="Profile"
          className="rounded-full w-24 h-24 mb-4"
        />
        <h1 className="text-xl font-semibold">Your Name</h1>
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
        {/* Social Media Icons */}
        <a
          href="https://twitter.com"
          className="text-white hover:text-blue-500 mr-4">
          twitter
        </a>
        <a
          href="https://linkedin.com"
          className="text-white hover:text-blue-500 mr-4">
          linkedin
        </a>
        {/* Add more social media icons as needed */}
      </div>
    </>
  );
}

export default Nav;
