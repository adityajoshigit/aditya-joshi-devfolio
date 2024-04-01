import classNames from "classnames";
import navMenuItems from "../../data/navigationItems";
import { SocialMediaLinks } from "../SocialMediaLinks";
import Navbar from "./Navbar";
import useGlobalContext from "../../hooks/useGlobalContext";
import { NameTag } from "../NameTag";
import { RefObject } from "react";

interface INavProps {
  refMap?: { [sectionId: string]: RefObject<HTMLElement> };
}

function Nav({ refMap }: INavProps) {
  const {
    isNavOpened,
    selectNavItem,
    scrollToSection,
    headerName,
    selectedNavItem,
  } = useGlobalContext();

  const goToSection = (to: string) => {
    console.log(`to: ${to}`);
    if (refMap?.[to]?.current) {
      scrollToSection(refMap?.[to]);
    }
  };

  if (!navMenuItems) return null;

  return (
    <div
      className={classNames(
        `
        flex-col 
        items-center 
        hidden 
        md:flex 
        md:fixed 
        h-screen  
        border-r-slate-400 
        shadow-lg 
        md:w-2/5 
        lg:w-1/4 
        shadow-slate-400 
        rounded-e-lg 
        px-4 
        py-6 
        space-y-6 
        `,
        {
          flex: isNavOpened,
        },
        "text-white bg-gray-800"
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
      <Navbar className="flex-grow">
        {navMenuItems.map(({ to, label }, index) => (
          <Navbar.Item
            className={classNames(
              selectedNavItem === to
                ? `text-cyan-400 font-semibold underline`
                : `hover:text-cyan-400`,
              "rounded-md text-center transition duration-150 cursor-pointer"
            )}
            key={`navitem-${index}-${to}`}
            onClick={() => {
              selectNavItem(to);
              goToSection(to);
            }}>
            <span className="block py-2">{label}</span>
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
