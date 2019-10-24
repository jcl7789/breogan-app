import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AuthData } from 'src/app/shared/models/auth-data.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  isLoading = false;
  invalidEmail = false;
  invalidPass = false;
  signupForm: FormGroup;
  invalidSignupMessage: string;

  constructor(private formBuilder: FormBuilder, private auth: AuthService) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  doSignup() {
    this.invalidSignupMessage = null;
    const email = this.signupForm.get('email');
    this.invalidEmail = this.validity(email);
    const pass = this.signupForm.get('password');
    this.invalidPass = this.validity(pass);
    if (this.signupForm.invalid) {
      return;
    }
    const authData: AuthData = { email: email.value, password: pass.value };
    this.auth.createUser(authData);
  }

  validity(control: AbstractControl) {
    return control.invalid;
  }

}
