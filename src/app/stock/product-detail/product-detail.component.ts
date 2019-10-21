import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Producto } from 'src/app/services/models/producto.model';
import { ProductosService } from 'src/app/services/API/productos.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  seleccionado: Producto;
  unidades = 0;
  
  constructor(
    private cd: ChangeDetectorRef,
    private productsService: ProductosService
    ) { }

  ngOnInit() {
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
  
  agregarACarrito() {
    this.productsService.agregarProducto(this.seleccionado, this.unidades);
  }

}
