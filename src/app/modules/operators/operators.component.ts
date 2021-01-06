
import { Component, OnInit } from "@angular/core";
import { of, from, } from "rxjs";
import { delay, map } from "rxjs/operators";
// import { of, from } from 'rxjs/Rx';


@Component({
  selector: "app-operators",
  templateUrl: "./operators.component.html"
})
export class OperatorsComponent implements OnInit {

  ngOnInit(): void {
    this.testOperators();
  }

  getData = (param) => {
    return of(`retrieved new data with param ${param}`).pipe(
      delay(1000)
    )
  }

  testOperators() {
    from([1, 2, 3, 4])
      .pipe(map(param => this.getData(param)))
      .subscribe((x) => {
        x.subscribe((data) => {
          console.log(data);
        })
      });
  }
}
