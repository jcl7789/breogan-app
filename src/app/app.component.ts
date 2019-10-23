import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './services/auth.service';
import { AppConfigService } from './services/app-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  titulo = 'Breogan - App';
  fecha = new Date();
  showDashboard = true;

  constructor(private authService: AuthService, private appConfig: AppConfigService) {}

  ngOnInit(): void {
    this.appConfig.load();
    this.authService.autoAuthUser();
  }

  ngOnDestroy(): void {
    console.log('Hasta luego');
  }
}
