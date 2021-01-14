import { Action } from "@ngrx/store";

export const GET_ADMIN = "GET_ADMIN";

export class GetAdmin implements Action {
  type: string = GET_ADMIN;
  constructor(public payload: string) { }
}

export type AdminActions = GetAdmin;
