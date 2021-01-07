import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { UserModel } from "src/app/models/user.model";
import { UsersService } from "src/app/services/users.service";

import * as fromUserReducer from "../store/users.reducers";

@Component({
  selector: "[usersUser]",
  templateUrl: "./user.component.html"
})
export class UserComponent implements OnInit, OnDestroy {
  user: UserModel;
  allowEdit: boolean = false;
  paramSubscription: Subscription;
  querySubscription: Subscription;



  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private usersService: UsersService,
    private store: Store<{ usersData: fromUserReducer.State }>) { }

  ngOnInit(): void {
    this.paramSubscription = this.activatedRoute.params.subscribe((param: Params) => {
      var userId = param["id"];

      this.user = this.usersService.getUserById(userId);
      // this.store.select("usersState").subscribe(
      //   (data) => {
      //     debugger;
      //     this.user = data.user;
      //   }
      // )


      this.usersService.userRouteActivated.subscribe((data) => {
        alert("subject data is : " + data)
      })
    });


    this.querySubscription = this.activatedRoute.queryParams.subscribe((param: Params) => {
      var allowEdit = param["allowEdit"];
      this.allowEdit = allowEdit == '1' ? true : false;
    });

  }

  onEditUser(userId: string) {
    this.router.navigate(["users", userId, "edit"], { queryParamsHandling: "merge" });
  }

  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe();
  }

  onLoad() {
    this.store.dispatch({ type: "START_LOADING" });

  }

  onUnload() {
    this.store.dispatch({ type: "STOP_LOADING" });

  }
}
