import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsersModule } from './modules/users/users.module';
import { AdminModule } from './modules/admin/admin.module';

import { AppComponent } from './app.component';
import { ServersComponent } from './modules/servers/servers.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { ReactiveFormComponent } from './modules/reactive-form/reactive-form.component';
import { HomeComponent } from './modules/home/home.component';
import { OperatorsComponent } from './modules/operators/operators.component';
import { UserRegistrationFormComponent } from './modules/user-registration-form/user-registration-form.component';

import { BasicHighlightDirective } from './directives/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight/better-highlight.directive';

import { UsersService } from './services/users.service';



@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    NotFoundComponent,
    OperatorsComponent,
    HomeComponent,
    UserRegistrationFormComponent,
    ReactiveFormComponent,
    BasicHighlightDirective,
    BetterHighlightDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    UsersModule,

  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
