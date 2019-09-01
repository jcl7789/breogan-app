import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

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
      email: ['', Validators.required],
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
    this.auth.login(email.value, password.value);
  }
}
