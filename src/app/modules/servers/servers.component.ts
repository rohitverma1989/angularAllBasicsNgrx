import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ServerModel } from 'src/app/models/server.model';
import * as fromServerReducer from "./store/servers.reducers";


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
})
export class ServersComponent implements OnInit {
  servers$: ServerModel[];

  constructor(private store: Store<{ serversData: fromServerReducer.State }>) { }

  ngOnInit(): void {
    this.store.select("serversData")
      .subscribe((data) => {
        this.servers$ = data.servers;
      })
  }


}
