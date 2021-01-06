import { componentFactoryName } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "[editUser]",
  templateUrl: "./edit-user.component.html"
})
export class EditUserComponent implements OnInit {
  name: string = "testname ";
  ngOnInit(): void {
  }

  onSaveUser() { }
}
