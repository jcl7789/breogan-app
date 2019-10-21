import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
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
  invalidLoginMessage: string;
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onTextChanged() {
    this.invalidLoginMessage = null;
    this.cd.markForCheck();
  }

  validity(control: AbstractControl) {
    return control.invalid;
  }

  doLogin() {
    this.invalidLoginMessage = null;
    const email = this.loginForm.get('email');
    this.invalidEmail = this.validity(email);
    const pass = this.loginForm.get('password');
    this.invalidPass = this.validity(pass);
    if (this.loginForm.invalid) {
      return;
    }
    const authData: AuthData = { email: email.value, password: pass.value };
    this.auth.login(authData).then((response) => {
      this.invalidLoginMessage = String(response);
      this.cd.markForCheck();
    });
  }
}
