import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockComponent } from './stock/stock.component';
import { MatTableModule } from '@angular/material/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    FontAwesomeModule
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
