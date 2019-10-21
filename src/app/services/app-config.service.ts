import { Injectable, APP_INITIALIZER, Provider } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  private endpoint: string;

  constructor(private http: HttpClient) {
    this.http.get<ConfigClass>('./assets/app-config.json').toPromise().then((data) => {
      this.endpoint = data.endpoint;
    });
  }

  load = (): string => {
    this.http
      .get<ConfigClass>('./assets/app-config.json')
      .toPromise()
      .then(data => {
        this.endpoint = data.endpoint;
      }).catch((error) => {
        this.endpoint = 'http://localhost:3000';
      });
      console.log('TCL: AppConfigService -> this.endpoint', this.endpoint);
      return this.endpoint;
  }

  /**
   * getEnpoint
   */
  public getEndpoint(): string {
    return this.endpoint;
  }

}

class ConfigClass {
  endpoint: string;
}

export function init(): Provider {
  return {
    provide: APP_INITIALIZER,
    useFactory: servicesOnRun,
    multi: true,
    deps: [AppConfigService]
  };
}

export function servicesOnRun(config: AppConfigService, token: null) {
  return () => config.load();
}

const AppConfigModule = {
  init: init
};

export { AppConfigModule };
