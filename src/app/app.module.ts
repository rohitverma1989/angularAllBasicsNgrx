import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ServersComponent } from './modules/servers/servers.component';
import { UsersComponent } from './modules/users/users.component';
import { EditUserComponent } from './modules/users/user/edit-user/edit-user.component';
import { UserComponent } from './modules/users/user/user.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';

import { BasicHighlightDirective } from './directives/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight/better-highlight.directive';
import { UsersService } from './services/users.service';
import { HomeComponent } from './modules/home/home.component';
import { OperatorsComponent } from './modules/operators/operators.component';
import { UserRegistrationFormComponent } from './modules/user-registration-form/user-registration-form.component';
import { ReactiveFormComponent } from './modules/reactive-form/reactive-form.component';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    ServersComponent,
    EditUserComponent,
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
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
