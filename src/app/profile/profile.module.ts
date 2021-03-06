import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { AppRoutingModule } from './../app-routing.module';
import { ManagementComponent } from './management/management.component';
import { ActionsComponent } from './actions/actions.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ProfileComponent, ManagementComponent, ActionsComponent]
})
export class ProfileModule { }
