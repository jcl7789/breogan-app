import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './../app-routing.module';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    AppRoutingModule,
    NgbPopoverModule
  ],
  declarations: [FooterComponent, HeaderComponent, ChartComponent],
  exports: [FooterComponent, HeaderComponent]
})
export class SharedModule { }


// Todos los componentes que vaya a utilizar, los creo aca, los declaro y exporto.
// El modulo se importa donde se vaya a utilizar.
