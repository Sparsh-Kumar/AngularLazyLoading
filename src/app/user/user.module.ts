import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent } from './user.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { UserRoutingModule } from './user-routing.module';


@NgModule({
  declarations: [
    UserComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
