import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { Routes } from '@angular/router';
import { ServersComponent } from './modules/servers/servers.component';
import { UsersComponent } from './modules/users/users.component';

const appRoutes: Routes = [
  { path: "", component: AppComponent },
  { path: "/servers", component: ServersComponent },
  { path: "/users", component: UsersComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    BetterHighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
