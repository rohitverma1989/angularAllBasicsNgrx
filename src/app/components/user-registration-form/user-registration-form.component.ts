import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "userRegistrationForm",
  templateUrl: "./user-registration-form.component.html",
  styleUrls: ["./user-registration-form.component.css"]
})
export class UserRegistrationFormComponent {
  defaultUserName = "Rohit";
  @ViewChild('frmUsrReg') formUserRegistration: NgForm;

  onSubmit(frmUsrReg: NgForm) {
    console.log(this.formUserRegistration);
  }
}
