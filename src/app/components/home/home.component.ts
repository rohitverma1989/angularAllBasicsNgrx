import { Component, OnInit } from "@angular/core";
import { observable, Observable, Observer } from "rxjs";
import "rxjs/Rx";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

  // counter = Observable.interval(1000);


  myObservable = new Observable((observer: Observer<string>) => {
    setTimeout(() => { observer.next("msg one ") },
      1000);

    setTimeout(
      () => { observer.next("msg two ") },
      4000);

    setTimeout(
      () => { observer.error("this is potential error.") },
      5000);
  });

  ngOnInit(): void {

    // this.counter.subscribe((data) => {
    //   console.log("data is : " + data);
    // })

    this.myObservable.subscribe(
      (data) => { console.log("this is data : " + data) },
      (error) => { console.log("this is error : " + error) },
      () => { console.log("this is completion.") },

    )
  }
}
