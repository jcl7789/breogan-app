import { Component, OnInit, OnDestroy, ChangeDetectorRef, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgbPopoverConfig, NgbPopover } from '@ng-bootstrap/ng-bootstrap';

import { AuthService } from 'src/app/services/auth.service';
import { ProductosService } from 'src/app/services/API/productos.service';
import { ItemCarrito } from '../models/item-carrito.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [ NgbPopoverConfig ]
})
export class HeaderComponent implements OnInit, OnDestroy {
  public isLogged: boolean;
  private authListenerSub: Subscription;

  public total: number;
  public carrito: ItemCarrito[];
  @ViewChild('popover', null) popoverElement: NgbPopover;

  constructor(
    private auth: AuthService,
    private productsService: ProductosService,
    private cd: ChangeDetectorRef,
    private popConfig: NgbPopoverConfig
  ) {
    popConfig.placement = 'bottom-right';
    popConfig.autoClose = 'outside';
    popConfig.triggers = 'manual';
  }

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
    this.carrito = [];
    this.authListenerSub.unsubscribe();
  }

  doLogout() {
    this.auth.logout();
  }

  mostrarCarrito() {
    this.cargarCarrito();
    this.popoverElement.open();
  }

  quitarUnidad(__index: number) {
    this.carrito[__index].cantidad--;
    const filtered = this.carrito.filter((item) => item.cantidad > 0);
    this.productsService.modificarCarrito(filtered);
    this.cargarCarrito();
  }

  cargarCarrito() {
    this.carrito = this.productsService.estadoCarrito();
    this.recalcularTotal();
    this.cd.markForCheck();
  }

  agregarUnidad(__index: number) {
    this.carrito[__index].cantidad++;
    this.productsService.modificarCarrito(this.carrito);
    this.cargarCarrito();
  }

  quitarElemento(__index: number) {
    const filtered = this.carrito.filter((item, index) => index !== __index);
    this.productsService.modificarCarrito(filtered);
    this.cargarCarrito();
  }

  recalcularTotal() {
    try {
      let aux = 0;
      this.carrito.forEach((item) => {
        aux += item.cantidad * item.precioUnidad;
      });
      this.total = aux;
    } catch (error) {
      this.total = 0;
    }
  }
}
