import { Injectable, APP_INITIALIZER, Provider } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  public endpoint: string;

  constructor(private http: HttpClient) { }

  async load() {
    const resp = await this.http.get<ConfigClass>('assets/app-config.json').toPromise();
    this.endpoint = resp ? resp.endpoint : 'http://localhost:3000';
  }

}

class ConfigClass { endpoint: string; }

export function init(): Provider {
  return {
    provide: APP_INITIALIZER,
    useFactory: servicesOnRun,
    multi: true,
    deps: [AppConfigService]
  };
}

export function servicesOnRun(config: AppConfigService, token: null) {
  return (): Promise<any> => {
    config.load();
    console.log(config);
    return config.load();
  }
}

const AppConfigModule = {
  init: init
};

export { AppConfigModule };
