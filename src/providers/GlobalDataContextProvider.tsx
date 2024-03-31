import { ReactNode, useState } from "react";
import GlobalDataContext from "../contexts/GlobalDataContext";

export interface IGlobalDataContextProviderProps {
  children: ReactNode;
}

function GlobalDataContextProvider({
  children,
}: IGlobalDataContextProviderProps) {
  const [isNavOpened, setIsNavOpened] = useState(false);
  const [headerName] = useState("");

  const openNav = () => setIsNavOpened(true);
  const closeNav = () => setIsNavOpened(false);

  return (
    <GlobalDataContext.Provider
      value={{
        theme: "LIGHT",
        isNavOpened,
        headerName,
        openNav,
        closeNav,
      }}>
      {children}
    </GlobalDataContext.Provider>
  );
}

export default GlobalDataContextProvider;
