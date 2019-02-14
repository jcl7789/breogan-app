import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { StockModule } from './stock/stock.module';
import { StockComponent } from './stock/stock/stock.component';
import { HomeModule } from './home/home.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'stock', component: StockComponent }
];

@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(routes), HomeModule, StockModule],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
