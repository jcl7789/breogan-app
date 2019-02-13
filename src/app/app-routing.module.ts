import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: '../app/home/home.module#HomeModule' },
  { path: '/home', loadChildren: '../app/home/home.module#HomeModule' },
  { path: '/stock', loadChildren: '../app/stock/stock.module#StockModule' }
];

@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
