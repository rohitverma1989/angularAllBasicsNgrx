import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { map } from 'rxjs/operators';
import { UserModel } from "../models/user.model";

@Injectable()
export class UsersService {


  userRouteActivated = new Subject();
  apiEmployees: string[];

  constructor(private httpClient: HttpClient) {

  }

  getAllUsers(): string[] {
    this.httpClient
      .get<string[]>("http://localhost:3899/api/GetAllEmployees")
      .pipe(map((employees) => {
        debugger;
        return employees;
      }))
      .subscribe((emp: string[]) => {
        debugger;
        this.apiEmployees = emp;
      });

    return this.apiEmployees;
  }

  getUserById(id: string) {
  }
}
