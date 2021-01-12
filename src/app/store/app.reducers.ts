import { ActionReducerMap } from "@ngrx/store";
import * as fromUserReducer from "../modules/users/store/users.reducers";
import * as fromServerReducer from "../modules/servers/store/servers.reducers";

export interface AppState {
  usersData: fromUserReducer.State,
  serversData: fromServerReducer.State
}

export const appReducers: ActionReducerMap<AppState> = {
  usersData: fromUserReducer.UsersReducer,
  serversData: fromServerReducer.ServersReducer
}
