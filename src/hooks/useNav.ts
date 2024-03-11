import { useContext } from "react";
import { NavContext } from "../contexts/NavContext";

export default function useNav() {
  const navContext = useContext(NavContext);
  if (!navContext)
    throw Error("Check the NavigationProvider hierarchy");
  return navContext;
}
