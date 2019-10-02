import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppConfigService } from './services/app-config.service';

// App modules
import { HomeModule } from './home/home.module';
import { StockModule } from './stock/stock.module';
import { SalesModule } from './sales/sales.module';
import { ScheduleModule } from './schedule/schedule.module';
import { StatsModule } from './stats/stats.module';
import { ProfileModule } from './profile/profile.module';

// Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

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
import { HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './services/auth-interceptor';
import { AuthModule } from './auth/auth.module';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

export function servicesOnRun(config: AppConfigService, token: null) {
  return () => config.load();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatPaginatorModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    AuthModule,
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
    MatProgressSpinnerModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    })
  ],
  entryComponents: [],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatPaginatorModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatTableModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSortModule,
    MatProgressSpinnerModule
  ],
  providers: [
    AuthGuardService,
    AuthService,
    RoleGuardService,
    AuthInterceptor,
    AppConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: servicesOnRun,
      multi: true,
      deps: [AppConfigService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

library.add(fas, far, fab);

platformBrowserDynamic().bootstrapModule(AppModule);
