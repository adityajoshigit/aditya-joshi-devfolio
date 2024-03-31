import React, { createContext } from "react";
import { ThemeType } from "../types";

export interface IGlobalDataContextProps {
  theme: ThemeType;
  isNavOpened: boolean;
  headerName?: string;
  openNav: () => void;
  closeNav: () => void;
}

const GlobalDataContext =
  createContext<IGlobalDataContextProps | null>(null);

export default GlobalDataContext;
