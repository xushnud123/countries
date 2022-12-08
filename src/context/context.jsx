import { createContext } from "react";
import { useFilter } from "reduser/reduser";

const GlobalContext = createContext();

export const ContextProvider = (props) => {
  const { state, setState } = useFilter();
  // console.log("context", {state}, setState);

  const value = {
    state,
    setState,
  };

  return (
    <GlobalContext.Provider value={value}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
