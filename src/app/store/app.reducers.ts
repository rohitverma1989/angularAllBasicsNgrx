import { ActionReducerMap } from "@ngrx/store";
import * as fromUserReducer from "../modules/users/store/users.reducers";

export interface AppState {
  usersData: fromUserReducer.State
}

export const appReducers: ActionReducerMap<AppState> = {
  usersData: fromUserReducer.UsersReducer,
}
