import { Action } from "@ngrx/store";
import { UserModel } from "src/app/models/user.model";
export const START_LOADING = "START_LOADING";
export const STOP_LOADING = "STOP_LOADING";

export interface State {
  isLoading: boolean,
  users: UserModel[]
}

const initialState: State = {
  isLoading: false,
  users: [
    new UserModel("rohit from reducer", "1"),
    new UserModel("riva from reducer", "2"),
    new UserModel("shikha from reducer", "3"),
  ]
};

export function UsersReducer(state = initialState, action: Action) {

  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: "hey", users: state.users };
    case STOP_LOADING:
      return { ...state, isLoading: "hello", users: state.users }

    default: return state;
  }

}
