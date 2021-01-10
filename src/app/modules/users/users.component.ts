import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserModel } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';
import * as fromUserReducer from "./store/users.reducers";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
  users$: UserModel[];
  // isLoading$: Observable<boolean>;
  isLoading$: boolean;

  constructor(private router: Router, private usersService: UsersService,
    private store: Store<{ usersData: fromUserReducer.State }>) {

  }

  ngOnInit(): void {
    //this.users = this.usersService.getAllUsers();

    // this.isLoading$ = this.store.pipe(map(data => data.usersData.isLoading))
    this.store.select("usersData")
      .subscribe((data) => {
        // alert("sdfdsfdsfsd")
        this.isLoading$ = data.isLoading;
        this.users$ = data.users;
      })
  }

  goToUserDetails(userId: string) {
    this.router.navigate(["/users", userId], { queryParams: { allowEdit: userId == "2" ? '1' : 0 } });
  }
}
