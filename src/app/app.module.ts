import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BasicHighlightDirective } from './directives/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight/better-highlight.directive';
import { RouterModule, Routes } from '@angular/router';
import { ServersComponent } from './modules/servers/servers.component';
import { UsersComponent } from './modules/users/users.component';
import { UsersService } from './services/users.service';
import { UserComponent } from './modules/users/user/user.component';
import { EditUserComponent } from './modules/users/user/edit-user/edit-user.component';
import { CommonModule } from '@angular/common';

const appRoutes: Routes = [
  { path: "servers", component: ServersComponent },
  {
    path: "users", component: UsersComponent, children: [
      { path: ":id", component: UserComponent },
      { path: ":id/edit", component: EditUserComponent },
    ]
  },

]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ServersComponent,
    EditUserComponent,
    BasicHighlightDirective,
    BetterHighlightDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
