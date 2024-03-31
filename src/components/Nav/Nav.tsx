import classNames from "classnames";
import navMenuItems from "../../data/navigationItems";
import { SocialMediaLinks } from "../SocialMediaLinks";
import Navbar from "./Navbar";
import useGlobalContext from "../../hooks/useGlobalContext";
import {
  BG_BRAND,
  BG_WHITE,
  TEXT_BRAND,
  TEXT_WHITE,
} from "../../constants";
import { NameTag } from "../NameTag";

function Nav() {
  const {
    isNavOpened,
    openNav,
    closeNav,
    theme,
    headerName,
  } = useGlobalContext();

  const navColorStyleForDark = `${BG_WHITE} ${TEXT_BRAND}`;
  const navColorStyleForLight = `${BG_BRAND} ${TEXT_WHITE}`;

  const navBranding =
    theme === "DARK"
      ? navColorStyleForDark
      : navColorStyleForLight;

  if (!navMenuItems) return null;
  return (
    <div
      className={classNames(
        `${navBranding} flex-col items-center hidden md:flex h-screen  border-r-slate-400 shadow-lg md:w-2/5 lg:w-1/4 shadow-slate-400 rounded-e-lg px-4 py-12 space-y-6`,
        {
          flex: isNavOpened,
        }
      )}>
      <div className="relative top-0 flex flex-col items-center space-y-6 w-full name-tag">
        <NameTag
          name={headerName || "Aditya Joshi"}
          className="md:text-4xl lg:text-4xl"
        />
        <img
          src="/images/prof_pic_asj.PNG"
          alt="Profile"
          className="mb-4 rounded-full"
          width={180}
          height={180}
        />
      </div>
      <Navbar className="flex-grow w-full overflow-y-auto">
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
      <div className="flex flex-row flex-initial w-full">
        <SocialMediaLinks />
      </div>
    </div>
  );
}

export default Nav;
