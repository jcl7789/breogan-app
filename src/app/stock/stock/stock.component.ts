import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ProductosService } from 'src/app/services/API/productos.service';
import { Producto } from 'src/app/services/models/producto.model';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})

export class StockComponent implements OnInit {

  productos: Producto[];
  seleccionado: Producto;
  unidades = 0;

  constructor(private productsService: ProductosService, private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.productos = this.productsService.getProductos();
    this.cd.markForCheck();
  }

  sumar() {
    if (this.unidades < this.seleccionado.stock) {
      this.unidades++;
      this.cd.markForCheck();
    }
  }

  restar() {
    if (this.unidades > 1) {
      this.unidades--;
      this.cd.markForCheck();
    }
  }

  seleccionar(index: number) {
    this.seleccionado = this.productos[index];
    this.cd.markForCheck();
  }


}
