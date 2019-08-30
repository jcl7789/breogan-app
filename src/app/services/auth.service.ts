import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthData } from '../shared/models/auth-data.model';

@Injectable({
  providedIn: 'root' // <- ADD THIS
})
export class AuthService {
  private logged: boolean;

  constructor(private router: Router, private http: HttpClient) {
    this.logged = false;
  }

  public isAuthenticated(): boolean {
    return this.logged;
  }

  public createUser(email: string, password: string) {
    const authData: AuthData = { email: email, password: password };
    this.http
      .post('http://localhost:3000/users/signup', authData)
      .subscribe((response: any) => {
        this.router.navigate(['/']);
      });
  }

  public async login(email: string, password: string) {
    const authData: AuthData = { email: email, password: password };
    this.http
      .post('http://localhost:3000/users/login', authData)
      .subscribe((response: any) => {
        const token = response.token;
        if (token) {
          this.logged = true;
        }
        this.router.navigate(['/']);
      });
  }
}
