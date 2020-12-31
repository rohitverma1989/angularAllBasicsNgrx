import { OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { UserModel } from "../models/user.model";


export class UsersService {

  userRouteActivated = new Subject();

  users: UserModel[] = [

    { name: "rivu", id: "1" },
    { name: "saurabh", id: "2" },
    { name: "shikha", id: "3" },
    { name: "rohit", id: "4" },
  ];

  getAllUsers(): UserModel[] {
    return this.users;
  }

  getUserById(id: string): UserModel {
    var user = this.users.filter(function (x) { return Number(x.id) == Number(id) });
    return user[0];
  }

}
