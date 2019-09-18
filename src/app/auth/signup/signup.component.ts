import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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

  constructor(private formBuilder: FormBuilder, private auth: AuthService) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  doSignup() {
    if (this.signupForm.invalid) {
      return;
    }
    const email = this.signupForm.get('email');
    const password = this.signupForm.get('password');
    this.invalidEmail = email.invalid;
    this.invalidPass = email.invalid;
    const authData: AuthData = { email: email.value, password: password.value };
    this.auth.createUser(authData);
  }

}
