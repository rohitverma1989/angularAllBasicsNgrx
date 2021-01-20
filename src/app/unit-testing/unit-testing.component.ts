import { Component, OnInit } from '@angular/core';
import { UnitTestingService } from './unit-testing.service';

@Component({
  selector: 'app-unit-testing',
  templateUrl: './unit-testing.component.html',
  styleUrls: ['./unit-testing.component.css'],
  providers: [UnitTestingService]
})
export class UnitTestingComponent implements OnInit {
  title: string = "heyaaaaaa";
  titleFromAsyncService: string;
  user: { name: string, id: string } = { name: "www", id: "qqq" };

  constructor(private unitTestingService: UnitTestingService) { }

  ngOnInit(): void {
    this.unitTestingService.getDetails().then((x: string) => { this.titleFromAsyncService = x })
  }

}
