import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subject } from "rxjs";
import { map } from 'rxjs/operators';
import * as fromUsersActions from "../modules/users/store/users.actions"
import * as fromUsersReducer from "../modules/users/store/users.reducers"

@Injectable()
export class UsersService {


  userRouteActivated = new Subject();
  apiEmployees: string[];

  constructor(private httpClient: HttpClient,
    private store: Store<{ usersData: fromUsersReducer.State }>) {

  }

  // getAllUsers() {
  //   this.httpClient
  //     .get<string[]>("http://localhost:3899/api/GetAllEmployees")
  //     .pipe(map((employees) => { return employees }))
  //     .subscribe((emp: string[]) => {
  //       debugger;
  //       this.apiEmployees = emp;
  //     });

  //   const emp: fromUsersActions.UsersPayloadData = {
  //     employees: this.apiEmployees
  //   };
  //   this.store.dispatch(new fromUsersActions.GetAllEmployees(emp));
  //   // return this.apiEmployees;
  // }

  getAllUsers() {
    debugger;
    this.store.dispatch(new fromUsersActions.TryGetAllEmployees(null));
    // return this.apiEmployees;
  }

  getUserById(id: string) {
  }
}
