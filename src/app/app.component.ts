import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) { }

  goToHome() {
    this.router.navigate(["/home"]);
  }
  goToUsers() {
    this.router.navigate(["/users"]);

  }
  goToServers() {
    this.router.navigate(["/servers"]);

  }

}
