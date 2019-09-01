import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  public isLogged: boolean;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.isLogged = this.auth.isAuthenticated();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.isLogged = this.auth.isAuthenticated();
  }

  toggleDashboard() {
    alert('cambiar tamaño dash');
  }
}
