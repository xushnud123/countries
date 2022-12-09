import React, { createContext, Dispatch, ReactNode, useReducer } from "react";
import useCountries from "modules/countries/hooks/useCountries";
import { useEffect } from "react";
import { useState } from "react";
import reducer, { State, Action } from "./reducer";

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
  const [initialState, setInitialState] = useState<State>({
    initialState: data,
    isLoading: isLoading,
  });

  useEffect(() => {
    setInitialState({
      initialState: data,
      isLoading,
    });
  }, [isLoading, data]);

  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    state,
    dispatch,
  };

  return <nameContext.Provider value={value}>{children}</nameContext.Provider>;
};

export default ContextProvider;
