import { Action } from "@ngrx/store";
import { UserModel } from "src/app/models/user.model";

import * as usersActions from "./users.actions";

const initial_state = {
  users: [
    new UserModel("rivu in reducer", "1"),
    new UserModel("rohit in reducer", "2"),
  ]
}

export function usersReducers(state = initial_state, action: usersActions.UsersActions) {

  switch (action.type) {
    case usersActions.USERS_ADD:
      return {
        ...state,
        users: [...state.users, action.payload]
      }
    default: return state;
  }
}
