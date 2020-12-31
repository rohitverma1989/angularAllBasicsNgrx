import { Component, OnDestroy, OnInit } from "@angular/core";
import { observable, Observable, Observer, Subscription } from "rxjs";
import "rxjs/Rx";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit, OnDestroy {

  counter = Observable.interval(1000);
  counterSubscription = new Subscription();

  // myObservable = new Observable((observer: Observer<string>) => {
  //   setTimeout(() => { observer.next("msg one ") },
  //     1000);

  //   setTimeout(
  //     () => { observer.next("msg two ") },
  //     4000);

  //   setTimeout(
  //     () => { observer.error("this is potential error.") },
  //     5000);
  // });

  ngOnInit(): void {

    this.counterSubscription = this.counter.subscribe((data) => {
      console.log("data is : " + data);
    })

    // this.myObservable.subscribe(
    //   (data) => { console.log("this is data : " + data) },
    //   (error) => { console.log("this is error : " + error) },
    //   () => { console.log("this is completion.") },

    // )
  }

  ngOnDestroy(): void {
    this.counterSubscription.unsubscribe();
  }


}
