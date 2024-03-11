import { createContext } from "react";

export interface INavContextProps {
  activeItem: string;
  onItemClick: (to: string) => void;
}

const NavContext = createContext<INavContextProps>({
  activeItem: "",
  onItemClick: () => console.warn("default click handler"),
});

export default NavContext;
