import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { StockComponent } from './stock/stock/stock.component';
import { SalesComponent } from './sales/sales/sales.component';
import { ScheduleComponent } from './schedule/schedule/schedule.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { StatsComponent } from './stats/stats/stats.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'stock', component: StockComponent },
  { path: 'sales', component: SalesComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'stats', component: StatsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
