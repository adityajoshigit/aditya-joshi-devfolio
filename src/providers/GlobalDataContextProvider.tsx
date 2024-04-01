import { ReactNode, RefObject, useState } from "react";
import GlobalDataContext from "../contexts/GlobalDataContext";

export interface IGlobalDataContextProviderProps {
  children: ReactNode;
}

function GlobalDataContextProvider({
  children,
}: IGlobalDataContextProviderProps) {
  const [isNavOpened, setIsNavOpened] = useState(false);
  const [headerName] = useState("");
  const [selectedNavItem, setSelectedNavItem] =
    useState("home");

  const openNav = () => setIsNavOpened(true);
  const closeNav = () => setIsNavOpened(false);
  const selectNavItem = (navItem: string) =>
    setSelectedNavItem(navItem);
  const scrollToSection = (ref: RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <GlobalDataContext.Provider
      value={{
        theme: "LIGHT",
        isNavOpened,
        headerName,
        selectedNavItem,
        openNav,
        closeNav,
        selectNavItem,
        scrollToSection,
      }}>
      {children}
    </GlobalDataContext.Provider>
  );
}

export default GlobalDataContextProvider;
