import { Injectable } from '@angular/core';
import { AppConfigService } from '../app-config.service';
import { HttpClient } from '@angular/common/http';

import { Producto } from '../models/producto.model';
import { ResponseError } from '../models/response-error.model';
import { ItemCarrito } from 'src/app/shared/models/item-carrito.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private endpoint: string;
  private carrito: ItemCarrito[] = [];

  public productosSnapshot: Producto[] = [];

  constructor(
    private config: AppConfigService,
    private http: HttpClient
  ) {
    this.endpoint = this.config.endpoint;
  }

  getProductos(): Producto[] {
    if (this.productosSnapshot && this.productosSnapshot.length === 0) {
      let productos: Producto[] = [];
      this.http.get<Producto[]>(this.endpoint + '/products/').toPromise().then((data) => {
        data.forEach((producto) => {
          const p = Object.assign({}, producto);
          productos.push(p);
        });
      }).catch((error: ResponseError) => {
        console.log(error);
      });
      this.productosSnapshot = productos;
    }
    return this.productosSnapshot;
  }

  agregarProducto(seleccionado: Producto, unidades: number) {
    const index = this.carrito.findIndex((item) => item.codigo === seleccionado.codigo);
    if (index === -1) {
      const itemCarrito: ItemCarrito = Object.assign({}, {
        codigo: seleccionado.codigo,
        cantidad: unidades,
        marca: seleccionado.marca,
        precioUnidad: seleccionado.precio,
        nombre: seleccionado.nombre,
        subtotal: seleccionado.precio * unidades
      });
      this.carrito.push(itemCarrito);
    } else {
      this.carrito[index].cantidad += unidades;
    }
  }

  quitarProducto(seleccionado: Producto, unidades?: number) {
    const index = this.carrito.findIndex((item) => item.codigo === seleccionado.codigo);
    if (index === -1) {
      return;
    }
    let newCarrito: ItemCarrito[] = [];
    this.carrito.forEach((item, i) => {
      if (i !== index) {
        newCarrito.push(item);
      } else {
        if (unidades && item.cantidad - unidades > 0) {
          item.cantidad = item.cantidad - unidades;
          newCarrito.push(item);
        }
      }
    });
    this.carrito = newCarrito.length === 0 ? [] : newCarrito;
  }

  estadoCarrito(): ItemCarrito[] {
    return this.carrito;
  }

  modificarCarrito(newCarrito: ItemCarrito[]): void {
    this.carrito = newCarrito;
  }
}
