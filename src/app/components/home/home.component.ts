import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subscription, interval } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit, OnDestroy {

  counter = interval(1000).pipe(map((data) => {
    return data * 2;
  }));

  // counter = Observable.interval(1000);

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
