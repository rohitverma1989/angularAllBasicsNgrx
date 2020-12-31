import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { ServersComponent } from "./components/servers/servers.component";
import { EditUserComponent } from "./components/users/user/edit-user/edit-user.component";
import { UserComponent } from "./components/users/user/user.component";
import { UsersComponent } from "./components/users/users.component";

const appRoutes: Routes = [
  { path: "servers", component: ServersComponent },
  {
    path: "users", component: UsersComponent, children: [
      { path: ":id", component: UserComponent },
      { path: ":id/edit", component: EditUserComponent },
    ]
  },
  { path: "not-found", component: NotFoundComponent },
  { path: "**", redirectTo: "not-found" }
]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule],

})
export class AppRoutingModule {

}
