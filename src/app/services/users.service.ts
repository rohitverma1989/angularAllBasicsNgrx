import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subject } from "rxjs";
import * as fromUsersActions from "../modules/users/store/users.actions"
import * as fromUsersReducer from "../modules/users/store/users.reducers"

@Injectable()
export class UsersService {


  userRouteActivated = new Subject();
  apiEmployees: string[];

  constructor(private httpClient: HttpClient,
    private store: Store<{ usersData: fromUsersReducer.State }>) {

  }

  getAllUsers() {
    this.store.dispatch(new fromUsersActions.TryGetAllEmployees(null));
  }

  getUserById(id: string) {
  }
}
