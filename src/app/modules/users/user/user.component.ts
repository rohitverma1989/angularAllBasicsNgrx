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
  paramSubscription: Subscription;

  constructor(private router: Router, private route: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit(): void {
    this.paramSubscription = this.route.params.subscribe((param: Params) => {
      var userId = param["id"];
      this.user = this.usersService.getUserById(userId);
    });
  }

  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe();
  }
}
