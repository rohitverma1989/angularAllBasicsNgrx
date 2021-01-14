import { NgModule } from "@angular/core";
import { StoreModule } from '@ngrx/store';

import { AdminComponent } from "./admin.component";
import { AdminRoutingModule } from "./admin.routing.module";
import * as fromAdminReducers from "../admin/store/admin.reducers";


@NgModule({
  declarations: [AdminComponent],
  imports: [
    AdminRoutingModule,
    StoreModule.forFeature("adminData", fromAdminReducers.AdminReducer)
  ],
  providers: [],
  exports: []
})
export class AdminModule { }
