import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EditUserComponent } from "./user/edit-user/edit-user.component";
import { UserComponent } from "./user/user.component";
import { UsersComponent } from "./users.component";
import { UsersRoutingModule } from "./users.routing.module";

@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    EditUserComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    UsersRoutingModule
  ],
  providers: [],
  exports: []
})
export class UsersModule {

}
