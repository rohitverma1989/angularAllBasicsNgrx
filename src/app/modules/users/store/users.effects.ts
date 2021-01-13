import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType, createEffect } from "@ngrx/effects";
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { Observable } from 'rxjs';
import * as fromUsersActions from "./users.actions"
import { Action } from "@ngrx/store";


@Injectable()
export class UsersEffects {
  payloadData$: fromUsersActions.UsersPayloadData;

  constructor(private actions$: Actions, private httpClient: HttpClient) { }

  @Effect()
  users = this.actions$.pipe(
    ofType<fromUsersActions.TryGetAllEmployees>(fromUsersActions.TRY_GET_ALL_EMPLOYEES),
    mergeMap(
      () => {
        return this.httpClient
          .get<string[]>("http://localhost:3899/api/GetAllEmployees")
          .pipe(
            map((data) => {
              debugger;
              const payload: fromUsersActions.UsersPayloadData = { employees: data }
              return new fromUsersActions.GetAllEmployees(payload)
            })
          )
      }
    )
  );
}
