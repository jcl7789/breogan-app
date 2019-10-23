import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockComponent } from './stock/stock.component';
import { MatTableModule } from '@angular/material/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    FontAwesomeModule,
    NgbModule
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
