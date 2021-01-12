import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map } from 'rxjs/operators';
import * as fromUsersActions from "./users.actions"


@Injectable()
export class UsersEffects {

  @Effect()
  users = this.actions$
    .pipe(ofType(fromUsersActions.TRY_GET_ALL_EMPLOYEES))
    .pipe(map((action: fromUsersActions.TryGetAllEmployees) => {
      debugger;
      var emps: string[];


      this.httpClient
        .get<string[]>("http://localhost:3899/api/GetAllEmployees")
        .pipe(map((employees) => { return employees }))
        .subscribe((emp: string[]) => {
          debugger;
          const emps1: fromUsersActions.UsersPayloadData = {
            employees: emp
          }
          return new fromUsersActions.GetAllEmployees(emps1)
          // {
          //   type: fromUsersActions.GET_ALL_EMPLOYEES,
          //   payload: { employees: emps1 }
          // }
        });
    }))


  constructor(private actions$: Actions,
    private httpClient: HttpClient) { }
}
