import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { AppRoutingModule } from './../app-routing.module';
import { LoginComponent } from './login/login.component';
import { ManagementComponent } from './management/management.component';
import { ActionsComponent } from './actions/actions.component';
import { SignupComponent } from './signup/signup.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    FormsModule
  ],
  declarations: [ProfileComponent, LoginComponent, ManagementComponent, ActionsComponent, SignupComponent]
})
export class ProfileModule { }
