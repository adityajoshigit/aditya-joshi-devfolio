import { useContext } from "react";
import GlobalDataContext from "../contexts/GlobalDataContext";

const useGlobalContext = () => {
  const globalDataContext = useContext(GlobalDataContext);
  if (globalDataContext) return globalDataContext;
  throw Error("No provider for Global Data Context!!!");
};

export default useGlobalContext;
