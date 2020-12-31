import { Component, OnInit } from "@angular/core";
import { Data } from "@angular/router";
import { Observable } from "rxjs";
import "rxjs/Rx";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    // setInterval((data) => { console.log("this is dta" + data) }, 1000);
    const counter = Observable.interval(1000);

    counter.subscribe(
      (data: number) => {
        console.log(data);
      }
    )
  }
}
