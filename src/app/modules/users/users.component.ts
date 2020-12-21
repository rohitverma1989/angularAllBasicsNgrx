import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
  users: UserModel[];

  constructor(private router: Router, private usersService: UsersService) {

  }

  ngOnInit(): void {
    debugger;
    this.users = this.usersService.getAllUsers();
  }


}
