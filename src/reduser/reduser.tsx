import { useEffect, useReducer } from "react";
import useCountries from "modules/countries/hooks/useCountries";
import type * as Types from "modules/countries/types";

interface IState {
  data: Types.CountriesData.Countries;
  isLoading?: boolean;
}

export enum CountAction {
  REGION = "REGION",
  POPULATION = "POPULATION",
  COUNTRIES = "COUNTRIES",
}

interface IAction {
  type: CountAction;
  payload: any;
}

function reducer(state: IState, action: IAction): any {
  switch (action.type) {
    case CountAction.REGION:
     
      break;
    case CountAction.POPULATION:
      break;
    case CountAction.COUNTRIES: {
      return { ...action.payload };
    }
  }
}

export const useFilter = () => {
  const initialState = {
    data: {},
    isLoading: true,
  };
  const { data, isLoading } = useCountries();
  const [state, setState] = useReducer(reducer, initialState);

  useEffect(() => {
    setState({
      type: CountAction.COUNTRIES,
      payload: {
        data,
        isLoading,
      },
    });
  }, [isLoading]);

  return { state, setState };
};
