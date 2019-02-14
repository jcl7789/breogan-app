import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FooterComponent, HeaderComponent, DashboardComponent],
  exports: [FooterComponent, HeaderComponent, DashboardComponent]
})
export class SharedModule { }


// Todos los componentes que vaya a utilizar, los creo aca, los declaro y exporto.
// El modulo se importa donde se vaya a utilizar.
