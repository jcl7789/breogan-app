import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { StockComponent } from './stock/stock/stock.component';
import { SalesComponent } from './sales/sales/sales.component';
import { ScheduleComponent } from './schedule/schedule/schedule.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { StatsComponent } from './stats/stats/stats.component';
import { AuthGuardService as AuthGuard } from '../app/services/auth-guard.service';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { NewSaleComponent } from './sales/new-sale/new-sale.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'stock', component: StockComponent, canActivate: [AuthGuard] },
  { path: 'sales', component: SalesComponent, canActivate: [AuthGuard] },
  { path: 'new-sale', component: NewSaleComponent, canActivate: [AuthGuard] },
  { path: 'schedule', component: ScheduleComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'stats', component: StatsComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
