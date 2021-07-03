import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { AdminComponent } from './admin.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminLoginComponent,
    AdminSignupComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
