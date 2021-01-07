import { Action } from "@ngrx/store";
import { UserModel } from "src/app/models/user.model";

export const USERS_ADD = "USERS_ADD";
export const GET_USER_BY_ID = "GET_USER_BY_ID";

export class AddUser implements Action {
  type: string = USERS_ADD;
  //payload: UserModel;
  constructor(public payload: UserModel) { }
}

export class GetUserUserById implements Action {
  type: string = GET_USER_BY_ID;
  constructor(public payload: string) { };
}


export type UsersActions = AddUser | GetUserUserById;
