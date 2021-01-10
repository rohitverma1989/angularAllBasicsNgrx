import { UserModel } from "src/app/models/user.model";
import * as fromUsersActions from "./users.actions"


export interface State {
  isLoading: boolean,
  users: UserModel[],
  selectedUser: UserModel
}

const initialState: State = {
  isLoading: false,
  users: [
    new UserModel("rohit from reducer", "1"),
    new UserModel("riva from reducer", "2"),
    new UserModel("shikha from reducer", "3"),
  ],
  selectedUser: null
};

export function UsersReducer(state = initialState, action: fromUsersActions.UsersActions) {

  switch (action.type) {
    case fromUsersActions.START_LOADING:
      return { ...state, isLoading: true, users: state.users };
    case fromUsersActions.STOP_LOADING:
      return { ...state, isLoading: false, users: state.users }
    case fromUsersActions.GET_USER_BY_ID:
      debugger;
      var userId = action.payload;
      var user = state.users.filter(function (x) { return Number(x.id) == Number(userId) });
      return { ...state, selectedUser: user[0] }

    default: return state;
  }

}
