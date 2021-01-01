import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "userRegistrationForm",
  templateUrl: "./user-registration-form.component.html"
})
export class UserRegistrationFormComponent {


  // onSubmit(frmUsrReg: HTMLFormElement) {
  // onSubmit(frmUsrReg: ElementRef) {
  onSubmit(frmUsrReg: NgForm) {
    console.log(frmUsrReg);
  }

}
