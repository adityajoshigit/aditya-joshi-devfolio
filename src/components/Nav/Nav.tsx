import classNames from "classnames";
import navMenuItems from "../../data/navigationItems";
import { SocialMediaLinks } from "../SocialMediaLinks";
import Navbar from "./Navbar";
import useGlobalContext from "../../hooks/useGlobalContext";
import { NameTag } from "../NameTag";
import { RefObject } from "react";
// import {
//   bgColorScheme,
//   textColorScheme,
// } from "../../constants";

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
        space-y-6 
        `,
        {
          flex: isNavOpened,
        },
        `text-white bg-gray-800`
      )}>
      <div className="relative top-0 flex flex-col items-center space-y-6 pt-6 w-full name-tag">
        <NameTag
          name={headerName || "Aditya Joshi"}
          className="md:text-4xl lg:text-4xl"
        />
        <img
          src="/images/prof_pic_asj.PNG"
          alt="Profile"
          className="mb-4 rounded-full"
          width={160}
          height={160}
        />
      </div>
      <Navbar className="flex-grow">
        {navMenuItems.map(({ to, label }, index) => (
          <Navbar.Item
            className={classNames(
              selectedNavItem === to
                ? `text-cyan-300 font-semibold underline`
                : `hover:text-cyan-300`,
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
      <div className="flex flex-row flex-initial border-gray-400 m-0 px-6 py-6 border-t-2 border-opacity-50 w-full">
        <SocialMediaLinks />
      </div>
    </div>
  );
}

export default Nav;
