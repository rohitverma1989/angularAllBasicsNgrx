import { Action } from "@ngrx/store";
import { ActionSequence } from "protractor";
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
      {
        alert("useradd state called");
        return {
          ...state,
          users: [...state.users, action.payload]
        }
      }

    case usersActions.GET_USER_BY_ID:
      {
        alert("GetUserUserById state called");
        debugger;
        //     var user = this.users.filter(function (x) { return Number(x.id) == Number(id) });
        // return user[0];
        var id = action.payload;
        var user = state.users.filter(function (x) { return Number(x.id) == Number(id) });
        return user[0];
      }
    default: {
      alert("default state called");
      return state;
    }
  }
}
