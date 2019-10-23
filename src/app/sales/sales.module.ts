import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesComponent } from './sales/sales.component';
import { AppRoutingModule } from './../app-routing.module';
import { MatTableModule } from '@angular/material/table';
import { NewSaleComponent } from './new-sale/new-sale.component';



@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    MatTableModule
  ],
  declarations: [SalesComponent, NewSaleComponent]
})
export class SalesModule { }
