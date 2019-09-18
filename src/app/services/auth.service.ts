import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthData } from '../shared/models/auth-data.model';
import { Subject, Observable } from 'rxjs';
import { stringify } from 'querystring';
import { getLocaleExtraDayPeriodRules } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private HOST_URL = 'http://localhost:3000'; // se debe cargar por ambiente

  private logged: boolean;
  private token: string;
  private tokenTimer: any;
  private authStatusListener = new Subject<boolean>();


  constructor(private router: Router, private http: HttpClient) {
    this.logged = false;
  }

  public getToken() {
    return this.token;
  }
  public isAuthenticated(): boolean {
    return this.logged;
  }

  public getAuthSatusListener(): Observable<boolean> {
    return this.authStatusListener.asObservable();
  }
  public createUser(authData: AuthData) {
    this.http
      .post(this.HOST_URL + '/users/signup', authData)
      .subscribe((response: any) => {
        this.router.navigate(['/']);
      });
  }

  public async login(authData: AuthData) {
    this.http
      .post<{token: string, expiresIn: number}>(this.HOST_URL + '/users/login', authData)
      .subscribe((response: any) => {
        const token = response.token;
        this.token = token;
        if (token) {
          const expiresInDuration = response.expiresIn;
          this.setAuthTimer(expiresInDuration);
          this.saveAuthData(token, this.calculateExpirationDate(expiresInDuration));
          this.setStatus(true);
          this.router.navigate(['/']);
        }
      });
  }

  private setAuthTimer(expiresInDuration: number) {
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, expiresInDuration * 1000);
  }

  public logout() {
    this.token = null;
    this.setStatus(false);
    clearTimeout(this.tokenTimer);
    this.router.navigate(['/']);
    this.clearAuthData();
  }

  private setStatus(status: boolean) {
    this.logged = status;
    this.authStatusListener.next(status);
  }

  private saveAuthData(token: string, expirationDate: Date) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
  }

  private calculateExpirationDate(expirationDate: number) {
    const now = new Date();
    return new Date(now.getTime() + expirationDate * 1000);
  }

  public autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiraEn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiraEn > 0) {
      this.token = authInformation.token;
      this.setStatus(true);
      this.setAuthTimer(expiraEn / 1000);
    }

  }

  private getAuthData() {
    const token = localStorage.getItem('token');
    const ed = localStorage.getItem('expiration');
    if (!token || !ed) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(ed)
    };
  }
}
