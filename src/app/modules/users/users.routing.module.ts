import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditUserComponent } from "./user/edit-user/edit-user.component";
import { UserComponent } from "./user/user.component";
import { UsersComponent } from "./users.component";


const usersRoutes: Routes = [
  {
    path: "users", component: UsersComponent,
    children: [
      { path: ":id", component: UserComponent },
      { path: ":id/edit", component: EditUserComponent },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(usersRoutes)],
  providers: [],
  exports: [RouterModule]
})
export class UsersRoutingModule {

}
