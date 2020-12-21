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

const appRoutes: Routes = [
  { path: "servers", component: ServersComponent },
  { path: "users", component: UsersComponent },
  { path: "user/:id", component: UserComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ServersComponent,
    BasicHighlightDirective,
    BetterHighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
