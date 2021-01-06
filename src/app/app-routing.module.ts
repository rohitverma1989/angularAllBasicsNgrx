import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./modules/not-found/not-found.component";
import { ServersComponent } from "./modules/servers/servers.component";

const appRoutes: Routes = [
  { path: "servers", component: ServersComponent },
  // {
  //   path: "users", component: UsersComponent, children: [
  //     { path: ":id", component: UserComponent },
  //     { path: ":id/edit", component: EditUserComponent },
  //   ]
  // },
  { path: "not-found", component: NotFoundComponent },
  // { path: "**", redirectTo: "/not-found" }
]
@NgModule({
  // imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],

})
export class AppRoutingModule {

}
