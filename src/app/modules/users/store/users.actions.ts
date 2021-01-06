import { Action } from "@ngrx/store";
import { UserModel } from "src/app/models/user.model";

export const USERS_ADD = "USERS_ADD";

export class AddUser implements Action {
  type: string;
  payload: UserModel;
}


export type UsersActions = AddUser;
