import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AuthData } from 'src/app/shared/models/auth-data.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  private userData: AuthData;

  public tiposDni: string[] = ['DNI', 'LC', 'LE', 'CI', 'PAS'];
  public tiposTelefonos: string[] = ['Celular', 'Fijo', 'Fax'];
  constructor( private as: AuthService ) { }

  ngOnInit() {
    this.userData = this.as.getProspect();
  }

  ngOnDestroy() {
    this.as.cancelUser();
  }

  registrar() {
    alert('Sin implementar');
  }
}
