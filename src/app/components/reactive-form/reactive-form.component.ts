import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

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
        'firstName': new FormControl(null, Validators.required),
        'lastName': new FormControl(null, Validators.required),
        'email': new FormControl('test@test.com', [Validators.required, Validators.email]),
      });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

}
