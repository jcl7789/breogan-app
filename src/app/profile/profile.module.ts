import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { AppRoutingModule } from './../app-routing.module';
import { LoginComponent } from './login/login.component';
import { ManagementComponent } from './management/management.component';
import { ActionsComponent } from './actions/actions.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [ProfileComponent, LoginComponent, ManagementComponent, ActionsComponent, SignupComponent]
})
export class ProfileModule { }
