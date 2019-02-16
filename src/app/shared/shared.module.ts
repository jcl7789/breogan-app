import { AppRoutingModule } from './../app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  declarations: [FooterComponent, HeaderComponent],
  exports: [FooterComponent, HeaderComponent]
})
export class SharedModule { }


// Todos los componentes que vaya a utilizar, los creo aca, los declaro y exporto.
// El modulo se importa donde se vaya a utilizar.
