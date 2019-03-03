import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  isLogged = false;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.isLogged = this.auth.isAuthenticated();
    // this.isLogged = true;
  }
}
