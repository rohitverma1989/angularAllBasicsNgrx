import { Action } from "@ngrx/store";
import { UserModel } from "src/app/models/user.model";

export const USERS_ADD = "USERS_ADD";

const initial_state = {
  users: [
    new UserModel("rivu in reducer", "1"),
    new UserModel("rohit in reducer", "2"),
  ]
}

export function usersReducers(state = initial_state, action: Action) {

  switch (action.type) {
    case USERS_ADD:
      return {
        ...state,
        users: [...state.users, action]
      }
  }
}
