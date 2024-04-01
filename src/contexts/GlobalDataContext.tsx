import React, { RefObject, createContext } from "react";
import { ThemeType } from "../types";

export interface IGlobalDataContextProps {
  theme: ThemeType;
  isNavOpened: boolean;
  headerName?: string;
  selectedNavItem: string;
  openNav: () => void;
  closeNav: () => void;
  selectNavItem: (navItem: string) => void;
  scrollToSection: (ref: RefObject<HTMLElement>) => void;
}

const GlobalDataContext =
  createContext<IGlobalDataContextProps | null>(null);

export default GlobalDataContext;
