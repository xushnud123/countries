import React, {
  createContext,
  Dispatch,
  ReactNode,
  useEffect,
  useReducer,
} from "react";

import useCountries from "modules/countries/hooks/useCountries";

import reducer, { Action, State } from "./reducer";

export interface IContext {
  state: State;
  dispatch: Dispatch<Action>;
}

export const nameContext = createContext<IContext>({
  state: {
    initialState: [],
    isLoading: true,
  },
  dispatch: () => null,
});

interface Props {
  children: ReactNode;
}

const ContextProvider: React.FC<Props> = ({ children }) => {
  const { data, isLoading } = useCountries();
  const [state, dispatch] = useReducer(reducer, {
    initialState: data,
    isLoading,
  });

  useEffect(() => {
    // disptch(()=>{})
  }, [isLoading, data]);

  console.log("state", state);

  const value = {
    state,
    dispatch,
  };

  return <nameContext.Provider value={value}>{children}</nameContext.Provider>;
};

export default ContextProvider;
