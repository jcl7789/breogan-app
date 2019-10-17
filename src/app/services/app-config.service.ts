import { Injectable, APP_INITIALIZER } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  private endpoint: string;

  constructor(private http: HttpClient) {
    this.load();
  }

  load(): string {
    this.http
      .get<ConfigClass>('./assets/app-config.json')
      .toPromise()
      .then(data => {
        this.endpoint = data.endpoint;
      }).catch((error) => {
        this.endpoint = 'http://localhost:3000';
      });
      return this.endpoint;
  }
}

class ConfigClass {
  endpoint: string;
}

export function init() {
  return {
    provide: APP_INITIALIZER,
    useFactory: servicesOnRun,
    multi: true,
    deps: [AppConfigService]
  }
}

export function servicesOnRun(config: AppConfigService, token: null) {
  return () => config.load();
}

const AppConfigModule = {
  init: init
}

export { AppConfigModule };