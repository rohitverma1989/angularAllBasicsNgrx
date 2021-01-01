import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "userRegistrationForm",
  templateUrl: "./user-registration-form.component.html"
})
export class UserRegistrationFormComponent {

  @ViewChild('frmUsrReg') formUserRegistration: NgForm;

  // onSubmit(frmUsrReg: NgForm) {
  //   console.log(frmUsrReg);
  // }


  onSubmit(frmUsrReg: NgForm) {
    debugger;
    console.log(this.formUserRegistration);
  }

}
