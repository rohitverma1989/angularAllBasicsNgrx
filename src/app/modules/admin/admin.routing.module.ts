import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";

const adminRoutes: Routes = [
  { path: "", component: AdminComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(adminRoutes)],
  providers: [],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
