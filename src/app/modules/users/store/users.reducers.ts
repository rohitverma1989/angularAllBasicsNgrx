import { Action } from "@ngrx/store";
export const START_LOADING = "START_LOADING";
export const STOP_LOADING = "STOP_LOADING";

export interface State {
  isLoading: boolean;
}

const initialState: State = {
  isLoading: false
}

export function UsersReducer(state = initialState, action: Action) {

  switch (action.type) {
    case START_LOADING:
      return { isLoading: "hey" };
    case STOP_LOADING:
      return { isLoading: "hello" }
    default: return state;
  }

}
