import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthData } from 'src/app/shared/models/auth-data.model';

@Component({
  selector: 'app-profile-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoading = false;
  invalidEmail = false;
  invalidPass = false;
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private auth: AuthService) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  doLogin() {
    if (this.loginForm.invalid) {
      return;
    }
    const email = this.loginForm.get('email');
    const password = this.loginForm.get('password');
    this.invalidEmail = email.invalid;
    this.invalidPass = email.invalid;
    const authData: AuthData = { email: email.value, password: password.value };
    this.auth.login(authData);
  }
}
