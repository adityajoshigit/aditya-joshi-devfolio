import { ReactNode, useState } from "react";
import { NavContext } from "../../contexts/NavContext";
import { DEFAULT_ACTIVE_NAV_ITEM } from "../../constants";

interface INavigationProviderProps {
  children: ReactNode;
}

function NavigationProvider({
  children,
}: INavigationProviderProps) {
  const [activeItem, setActiveItem] = useState(
    DEFAULT_ACTIVE_NAV_ITEM
  );

  const onItemClick = (itemClicked: string) => {
    setActiveItem(itemClicked);
  };

  return (
    <NavContext.Provider
      value={{
        activeItem,
        onItemClick,
      }}>
      {children}
    </NavContext.Provider>
  );
}

export default NavigationProvider;
