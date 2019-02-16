import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockComponent } from './stock/stock.component';
import { MatTableModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule
  ],
  declarations: [StockComponent],
  entryComponents: [StockComponent],
})
export class StockModule { }

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
