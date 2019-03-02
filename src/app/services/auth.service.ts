import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private logged: boolean;

  constructor(private router: Router) { this.logged = false; }

  public isAuthenticated(): boolean {
    return this.logged;
  }

  public login(): void {
    this.logged = !this.logged;
    this.router.navigate([ '/' ]);
  }

}
