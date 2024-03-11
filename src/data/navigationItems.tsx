import { INavItemData } from "../types";
import {
  Home,
  Education,
  WorkExp,
  Projects,
  Contact,
  AboutMe,
} from "../views";

const navMenuItems = [
  {
    to: "/home",
    label: "Home",
    element: <Home />,
  },
  {
    to: "/about-me",
    label: "About Me",
    element: <AboutMe />,
  },
  {
    to: "/edu",
    label: "Education",
    element: <Education />,
  },
  {
    to: "/work-exp",
    label: "Work Experience",
    element: <WorkExp />,
  },
  {
    to: "/projects",
    label: "Projects",
    element: <Projects />,
  },
  {
    to: "/contact",
    label: "Wanna Chat?",
    element: <Contact />,
  },
] as INavItemData[];

export default navMenuItems;
