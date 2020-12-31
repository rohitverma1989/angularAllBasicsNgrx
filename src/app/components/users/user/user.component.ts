import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { UserModel } from "src/app/models/user.model";
import { UsersService } from "src/app/services/users.service";

@Component({
  selector: "[usersUser]",
  templateUrl: "./user.component.html"
})
export class UserComponent implements OnInit, OnDestroy {
  user: UserModel;
  allowEdit: boolean = false;
  paramSubscription: Subscription;
  querySubscription: Subscription;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit(): void {
    this.paramSubscription = this.activatedRoute.params.subscribe((param: Params) => {
      var userId = param["id"];
      this.user = this.usersService.getUserById(userId);
    });


    this.querySubscription = this.activatedRoute.queryParams.subscribe((param: Params) => {
      debugger;
      var allowEdit = param["allowEdit"];
      this.allowEdit = allowEdit == '1' ? true : false;
    });

  }

  onEditUser(userId: string) {
    debugger;
    this.router.navigate(["users", userId, "edit"], { queryParamsHandling: "merge" });
  }

  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe();
  }
}
