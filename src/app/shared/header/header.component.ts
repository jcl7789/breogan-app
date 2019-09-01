import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public isLogged: boolean;
  private authListenerSub: Subscription;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.isLogged = this.auth.isAuthenticated();
    this.authListenerSub = this.auth.getAuthSatusListener().subscribe(
      isAuth => {
        this.isLogged = isAuth;
      }
    );
  }

  toggleDashboard() {
    alert('cambiar tamaño dash');
  }

  ngOnDestroy(): void {
    this.authListenerSub.unsubscribe();
  }

  doLogout() {
    this.auth.logout();
  }
}
