export interface State {
  initialState: any;
  isLoading: boolean;
}

export interface Action {
  type: string;
  payload: string;
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_NAME":
      return state;
    default:
      return state;
  }
};

export default reducer;
