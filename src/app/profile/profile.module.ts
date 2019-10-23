import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './../app-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ActionsComponent } from './actions/actions.component';
import { ManagementComponent } from './management/management.component';
import { NewProductFormComponent } from './management/components/new-product-form/new-product-form.component';
import { NewBrandFormComponent } from './management/components/new-brand-form/new-brand-form.component';
import { NewCategoryFormComponent } from './management/components/new-category-form/new-category-form.component';
import { NewUnitFormComponent } from './management/components/new-unit-form/new-unit-form.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ProfileComponent,
    ManagementComponent,
    ActionsComponent,
    NewProductFormComponent,
    NewBrandFormComponent,
    NewCategoryFormComponent,
    NewUnitFormComponent
  ]
})
export class ProfileModule { }
