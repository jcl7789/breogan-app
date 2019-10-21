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
  

  
  constructor(private productsService: ProductosService, private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.productos = this.productsService.getProductos();
    this.cd.markForCheck();
  }

  seleccionar(index: number) {
    this.productos[index];
    this.cd.markForCheck();
  }


}
