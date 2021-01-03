import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "reactiveForm",
  templateUrl: "./reactive-form.component.html",
  styleUrls: ["./reactive-form.component.css"]
})
export class ReactiveFormComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup(
      {
        'firstName': new FormControl(null),
        'lastName': new FormControl(null),
        'email': new FormControl('test@test.com'),
      });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

}
