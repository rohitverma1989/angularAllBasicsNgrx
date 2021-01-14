import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import * as fromAdminReducers from "../admin/store/admin.reducers";


@Component({
  selector: "admin",
  templateUrl: "./admin.component.html"
})
export class AdminComponent {

  name$: string;
  constructor(store: Store<{ adminData: fromAdminReducers.State }>) {
    store.select("adminData").subscribe(x => this.name$ = x.adminName)
  }

}
