import { Action } from "@ngrx/store";

export const START_LOADING = "START_LOADING";
export const STOP_LOADING = "STOP_LOADING";
export const GET_USER_BY_ID = "GET_USER_BY_ID";

export class GetAllUsers implements Action {
  type: string = START_LOADING;
  constructor(public payload: string) { }

}

export class GetUserById implements Action {
  type: string = GET_USER_BY_ID;
  constructor(public payload: string) { }
}

export type UsersActions = GetAllUsers | GetUserById;
