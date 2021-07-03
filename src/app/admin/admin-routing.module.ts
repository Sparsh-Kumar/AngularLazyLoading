import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'login', component: AdminLoginComponent },
      { path: 'signup', component: AdminSignupComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
