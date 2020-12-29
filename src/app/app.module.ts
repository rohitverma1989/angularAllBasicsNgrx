import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ServersComponent } from './components/servers/servers.component';
import { UsersComponent } from './components/users/users.component';
import { EditUserComponent } from './components/users/user/edit-user/edit-user.component';
import { UserComponent } from './components/users/user/user.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { BasicHighlightDirective } from './directives/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight/better-highlight.directive';
import { UsersService } from './services/users.service';

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
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    ServersComponent,
    EditUserComponent,
    NotFoundComponent,
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
