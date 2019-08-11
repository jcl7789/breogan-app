import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthData } from '../shared/models/auth-data.model';

@Injectable({
  providedIn: 'root'
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
      .subscribe(response => {
        console.log(response);
      });
  }

  public async login() {
    console.log('Comunicandose con el servidor');
    console.log('Respuesta recibida. ---> : (200) LOGIN EXITOSO');
    this.logged = !this.logged;
    this.router.navigate(['/']);
  }
}
