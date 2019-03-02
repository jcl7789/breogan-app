import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

// App modules
import { HomeModule } from './home/home.module';
import { StockModule } from './stock/stock.module';
import { SalesModule } from './sales/sales.module';
import { ScheduleModule } from './schedule/schedule.module';
import { StatsModule } from './stats/stats.module';
import { ProfileModule } from './profile/profile.module';

// Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule, MatDialogModule, MatTableModule, MatSelectModule, MatFormFieldModule, MatSortModule } from '@angular/material';

// iconos
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { RoleGuardService } from './services/role-guard.service';
import { JwtModule } from '@auth0/angular-jwt';

export function tokenGetter() { return localStorage.getItem('access_token'); }

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatPaginatorModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    HomeModule,
    StockModule,
    SalesModule,
    ScheduleModule,
    StatsModule,
    ProfileModule,
    MatTableModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSortModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    })
  ],
  exports: [],
  providers: [ AuthGuardService, AuthService, RoleGuardService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

library.add(fas, far, fab);

platformBrowserDynamic().bootstrapModule(AppModule);
