import { Action } from "@ngrx/store";

export const START_LOADING = "START_LOADING";
export const STOP_LOADING = "STOP_LOADING";
export const GET_USER_BY_ID = "GET_USER_BY_ID";
export const GET_ALL_EMPLOYEES = "GET_ALL_EMPLOYEES";

// export class GetAllUsers implements Action {
//   type: string = START_LOADING;
//   constructor(public payload: string) { }
// }


export interface UsersPayloadData {
  selectedUserId?: string,
  employees?: string[]
}

export class GetUserById implements Action {
  type: string = GET_USER_BY_ID;
  constructor(public payload: UsersPayloadData) { }
}

export class GetAllEmployees implements Action {
  type: string = GET_ALL_EMPLOYEES;
  constructor(public payload: UsersPayloadData) { }
}

export type UsersActions = GetUserById | GetAllEmployees;
