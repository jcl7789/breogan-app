import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isLoading = false;

  constructor(private auth: AuthService) { }

  doLogin(form: NgForm) {
    const email = form.value.get('email');
    const password = form.value.get('password');
    this.auth.login(email, password);
  }
}
